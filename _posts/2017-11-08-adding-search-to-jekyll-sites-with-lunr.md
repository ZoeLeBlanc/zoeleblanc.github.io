---
layout: post
title: Adding Search to Jekyll Sites with Lunr 
date: 2017-11-08
description: Tutorial about adding Lunr search indexes to Jekyll sites
---

I've officially started at the Scholars' Lab at the University of Virginia as a Digital Humanities Developer, and one of my first tasks was getting search working on their Jekyll static sites. Static sites are generally a great option for most DH projects since they don't have many users or dynamic elements, but we often still want some form of search  on these sites. Previously the Scholars' Lab had been using [Solr](https://lucene.apache.org/solr/) with their Wordpress engine, but we needed a new solution for a static site projects. While I played around with [Elasticsearch](https://blog.omc.io/elasticsearch-for-jekyll-part-1-ab456ac7c093) and custom google searches, I eventually settled on [Lunr](https://lunrjs.com/) , which is billed as "A bit like Solr, but much smaller and not as bright".

Lunr has been the _go to_ search engine for static sites for a few years but there's been a lot of recent changes to the code base, which means most of the available tutorials are out of date. So here's a brief tutorial outlining everything I had to learn the hard way to get Lunr up and running. You can see a functioning version of the search on this site, and hopefully eventually I can link to some Scholars' Lab examples of search on different projects. Most of the code in this post was pieced together from trial and error, the [Lunr github repo](https://github.com/olivernn/lunr.js), and the creator of Lunr's demo project, [Moonwalkers](https://github.com/olivernn/moonwalkers).

 **So first what is Lunr?**

Lunr is an inverted index that allows you to build a fast search engine for any pages on your static site. I'm still learning about the mechanics of search engines, but there are two general types of indexes for searching - forward and inverted. Forward indexes search for terms in a series of documents, whereas inverted indexes search for a list of words and where they appear.

A great example is from [this Stack Overflow post](https://stackoverflow.com/questions/7727686/whats-the-difference-between-an-inverted-index-and-a-plain-old-index) :

 _"The index in the back of a book is actually an inverted index, as defined by the examples above - a list of words, and where to find them in the book. In a book, the table of contents is like a forward index: it's a list of documents (chapters) which the book contains, except instead of listing the words in those sections, the table of contents just gives a name/general description of what's contained in those documents (chapters)."_

So Lunr essentially takes whatever you specify and creates an index of the position(s) of each word. Then when you query the index it finds which documents contain that word, and scores the document based on its similarity to the query. Lunr also supports wildcards and boosts, as well as searching on specified fields. You can read more about it's functionality and see some examples in the [docs](https://lunrjs.com/guides/searching.html).

Now one of the biggest changes to the Lunr codebase is that the index is now an immutable data structure. This means that any updates to the index require recreating the index from scratch. Overall this change is an improvement for maintaining the integrity of the index, but it means that many of the older tutorials are outdated because they are premised on dynamically updating the index.

So today I'm going to outline how you can take advantage of having an immutable and inverted Lunr search through pre-building your index and then querying it dynamically with your Jekyll site. You can see all the code from my own site at [my Github repo](https://github.com/ZoeLeBlanc/zoeleblanc.github.io) .


**So let's start building your search engine!** 
 
First things first, let's add some dependencies.

Add these gems to your Gemfile.

```
gem 'json'
gem 'rake'
gem 'front_matter_parser'
```
then run  ```bundle install```

Now either run ```npm init``` or create a package.json. Then run ```npm install lunr```, `npm install jquery`, and if you're using dates ```npm install moment```

**Now let's create some automated tasks to compile our corpus and search index**

[AN: I'm assuming you don't already have a JSON file with all your posts and pages. If you do feel free to skip down to the scripts.]

Open your Rakefile or create one if you don't have one in the main directory of your site. In your Rakefile, we're going to create a task to take all your desired inputs and create a corpus with them.

At the top of your Rakefile make sure to require the necessary packages.
```
require 'rake'
require 'json'
require 'front_matter_parser'
require 'open3'
```
Then let's create your first rake task.
```
desc "Create corpus for search"
file './corpus.json' => ['./', *Rake::FileList['_posts/*.md'].exclude()] do |md_file|
     unsafe_loader = ->(string) { YAML.load(string) } #required by front matter parser. Read more at the githu brepo
     corpus = md_file.sources.grep(/\.md$/)
     .map do |path|
        file_path = './' + path
        parsed = FrontMatterParser::Parser.parse_file(file_path, loader: unsafe_loader)
         {
            id: path.pathmap('%n'),
            name: parsed['title'],
            url: parsed['title'].downcase.strip.gsub(' ', '-'),
            content: parsed.content,
         }
     end
     File.open(md_file.name, 'w') do |f|
        f << JSON.generate(corpus)
     end
end
```
So this task starts with a description, _creating a corpus for search_. Then we list the file we're creating, `corpus.json` (you can call yours whatever you like but be sure to change it everywhere it's referenced). Then we pass in the files we want to use for the corpus. Right now I'm just passing in the posts, but you could pass in all the pages to the filelist. You can also exclude certain files.
For example:
```
*Rake::FileList['_posts/*.md', '_projects/*.md'].exclude('1project.markdown')]
```
At the end of the `do` statement we specify that we're inputting markdown files with `md_file`. Then we start mapping each file and passing it to the front matter parser gem.
```
file_path = './' + path
 parsed = FrontMatterParser::Parser.parse_file(file_path, loader: unsafe_loader)
 {
    id: path.pathmap('%n'),
    name: parsed['title'],
    url: parsed['title'].downcase.strip.gsub(' ', '-'),
    content: parsed.content,
 }
```
In the object you specify which properties you want for the corpus and your search index. The front matter parser gem will be able to parse any front matter property. One thing I would recommending is even if you change the properties, be sure to include the url for the search functionality since it's how people can click on a post. Finally we write the file to JSON and now you should have a `corpus.json`.

Then comes our second rake task to build the search index.
```
file './search_index.json' => ['./corpus.json'] do |t|
     Open3.popen2('script/build-index') do |stdin, stdout, wt|
        IO.copy_stream(t.source, stdin)
        stdin.close
        IO.copy_stream(stdout, t.name)
     end
end
```
In this task we create `search_index.json` from our `corpus.json` and a script we have yet to create, called `build-index`. This task essentially streams the contents of the corpus into the script and outputs the result to the search index.

Now at the bottom of your Rakefile, add these two tasks.
```
task :default => ['./corpus.json', './search_index.json']
```

**Now we need to create the build-index script.** 

In your script folder, create a file called `build-index` and paste this code in it.
```
#!/usr/bin/env node

var lunr = require('lunr'),
 stdin = process.stdin,
 stdout = process.stdout,
 buffer = []

stdin.resume()
stdin.setEncoding('utf8')

stdin.on('data', function (data) {
    buffer.push(data)
})

stdin.on('end', function () {
     var corpus = JSON.parse(buffer.join(''))

     var idx = lunr( (builder) => {
         builder.ref('id')
         builder.field('name')
         builder.field('url')
         builder.field('content')
         builder.metadataWhitelist = ['position']
         // This is required to provide the position of terms in
         // in the index. Currently position data is opt-in due
         // to the increase in index size required to store all
         // the positions. This is currently not well documented
         // and a better interface may be required to expose builder
         // to consumers.
         // This is the biggest change to the interface over the
         // 0.x and 1.x branches. Documents must be added to the
         // index within builder closure. When builder function completes
         // the index is immutable, no more documents can be added.
         corpus.forEach(function (doc) {
             builder.add(doc)
         }, builder)
     })

    stdout.write(JSON.stringify(idx))
})
```
In this file, we're calling Lunr and essentially buffering our corpus data through the Lunr constructor, specifying the fields we want to include and then stringifying the output to write to JSON. The output becomes our `search_index.json`

The comments included are from the creator of Lunr. This script is the biggest change to Lunr, since now both the `builder` constructor (instead of earlier use of `ref`) and the fact that all the documents have to be added where the Lunr instance is created.

Now we need to create a `search.js` file in our javascript assets, which will call the `search_index.json` and allow us to return search results.

Paste this code into `search.js`
```
jQuery(function() {

  $.getJSON('/search_index.json', (data, err) => {
    window.idx = data;
  });

  $.getJSON('/corpus.json', (data, err) => {
      window.documents = [];
      Object.entries(data).forEach((key, value)=> {
          var doc = {
              'id' : key[1].id,
              'content': key[1].content,
              'name': key[1].name,
              'url': key[1].url,

          };
          window.documents.push(doc);
      });
  });
  // Event when the form is submitted
  $("#site_search").submit((event) => {
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      window.index = lunr.Index.load(window.idx);
      var results = window.index.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  var buildSearchResult = (doc) => {
    var li = document.createElement('li'),
        article = document.createElement('article'),
        header = document.createElement('header'),
        section = document.createElement('section'),
        h2 = document.createElement('h2'),
        a = document.createElement('a'),
        p1 = document.createElement('p')

    a.dataset.field = 'url';
    a.href += '/blog/' + doc.url;
    a.textContent = doc.name;

    p1.dataset.field = 'content';
    p1.textContent = doc.content;
    p1.style.textOverflow = 'ellipsis';
    p1.style.overflow = 'hidden';
    p1.style.whiteSpace = 'nowrap';

    li.appendChild(article);
    article.appendChild(header);
    article.appendChild(section);
    header.appendChild(h2);
    h2.appendChild(a);
    section.appendChild(p1);

    return li;
  }

  function display_search_results(results) {
      var search_results = $("#search_results");
      if (results.length) {
          search_results.empty(); // Clear any old results

          results.forEach(function(result) {
              var item = window.documents.filter(doc => doc.id === result.ref);
              var li = buildSearchResult(item[0])// Build a snippet of HTML for this result
              Object.keys(result.matchData.metadata).forEach(function (term) {
                  Object.keys(result.matchData.metadata[term]).forEach(function (fieldName) {
                      var field = li.querySelector('[data-field=' + fieldName + ']'),
                      positions = result.matchData.metadata[term][fieldName].position
                      wrapTerms(field, positions);
                  });
              });
              search_results.append(li);
            });
        } else {
            // If there are no results, let the user know.
            search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
        }
    }

  function wrapTerms(element, matches) {
    var nodeFilter = {
      acceptNode: function (node) {
        if (/^[\t\n\r ]*$/.test(node.nodeValue)) {
          return NodeFilter.FILTER_SKIP
        }
        return NodeFilter.FILTER_ACCEPT
      }
    }
    var index = 0,
        matches = matches.sort(function (a, b) { return a[0] - b[0] }).slice(),
        previousMatch = [-1, -1],
        match = matches.shift(),
        walker
    if (element instanceof Element) {
        walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          nodeFilter,
          false
        )
    } else {
        return 'not an element';
    }
    while (node = walker.nextNode()) {
      if (match == undefined) break
      if (match[0] == previousMatch[0]) continue

      var text = node.textContent,
          nodeEndIndex = index + node.length;

      if (match[0] < nodeEndIndex) {
        var range = document.createRange(),
            tag = document.createElement('mark'),
            rangeStart = match[0] - index,
            rangeEnd = rangeStart + match[1];

        tag.dataset.rangeStart = rangeStart
        tag.dataset.rangeEnd = rangeEnd

        range.setStart(node, rangeStart)
        range.setEnd(node, rangeEnd)
        range.surroundContents(tag)

        index = match[0] + match[1]

        // the next node will now actually be the text we just wrapped, so
        // we need to skip it
        walker.nextNode()
        previousMatch = match
        match = matches.shift()
      } else {
        index = nodeEndIndex
      }
    }
  }
});
```
The first thing we do in the file is load the `search_index.json` and the `corpus.json` into global variables. We transform the corpus file into an array with a series of objects. If you're not familiar with `window` that allows you to access the variables in the browser console, which is helpful for trouble shooting the search index.

Next we create an event listener on the search input field. In this code block, we also instantiate the Lunr Index and pass it our search_index data. Then we can pass that index our search queries from the input field. Finally we pass the results to our functions to display the search results.

The `display_search_results` function takes the results and makes sure there is an actual result. It then empties out the div of any existing results. Then it loops through the results and filters the corpus to get the right post, and passes the post to the `buildSearchResult` function. In that function, we create the DOM elements that we'll be inserting on the page and we set what elements from the corpus we want to visualize. In this case, I'm showing the name in an anchor tag with the post url, and then a truncated version of the content.

That DOM element is then passed to a loop that looks through the metadata of the results to find the exact position of each word in a document and then pass it to the `wrapTerms` function. This function deals with the element nodes and positions of each word in the document to wrap the word with the native html mark tag, which highlights the term. Finally the results are append to the page or if there are no results, then a `no results found` is appended.

The final steps are to create the `search.html` page and link the javascript scripts and node modules.

Paste this code into your `search.html` or on which ever page you want the search to be available.
```
<br/>&nbsp;
<form action="get" id="site_search">
<center>
  <input style="font-size:20px;" type="text" id="search_box">
  <input style="font-size:20px;" type="submit" value="Go!">
</center>
</form>
<br/>&nbsp;
<br/>&nbsp;

<ul id="search_results"></ul>
<!-- You can either host the dependencies from cdns or use the node modules -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js" type="text/javascript" charset="utf-8"></script>
<script src="https://unpkg.com/lunr/lunr.js" type="text/javascript" charset="utf-8"></script> -->

<script src="{{ site.baseurl }}/node_modules/jquery/dist/jquery.min.js" type="text/javascript" charset="utf-8"></script>
<script src="{{ site.baseurl }}/node_modules/moment/min/moment.min.js" type="text/javascript" charset="utf-8"></script>
<script src="{{ site.baseurl }}/node_modules/lunr/lunr.js" type="text/javascript" charset="utf-8"></script>
<script src="{{ site.baseurl }}/assets/js/search.js" type="text/javascript" charset="utf-8"></script>
```
Now that you have everything set up, you should be able to run `rake` and have your search index built. Then once you build your jekyll site and serve it, you can go to wherever you're hosting your search page and put in a query.

You can try out the search function on my site and let me know if you have any issues with lunr! Happy searching 🕵️
