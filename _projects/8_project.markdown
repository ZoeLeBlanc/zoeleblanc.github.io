---
layout: data
title: Visualizing Cairo's Congo Crisis
description: Digital history project to trace representations of Congo and anti-colonialism, 2019-Present
img: /assets/img/congo1.png
display: False
---
<script src="https://cdn.jsdelivr.net/npm/vega@5.7.2"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.0.0-beta.10"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@5.1.3"></script>

<div class="wrapper">
    <button onclick="topFunction()" id="scrollButton" title="Go to top">Back to Top</button>
    <h1>Visualizing Cairo's Congo Crisis </h1>
    <h4 style="color: indianred;"><span class="fa fa-pencil"></span> Currently in draft. Estimated publication date is January 2020 <span class="fa fa-pencil"></span></h4>
    <br>
    <div class="row">
        <p>
            <i>Visualizing Cairo's Congo Crisis</i> is an interactive, data history of how the Congo Crisis of the 1960s was influenced by <i>and</i> influential in Egypt. After the Free Officers' Revolution of 1952, Gamal Abdel Nasser and his coterie of military officers turned bureaucrats sought to make Cairo an international hub for anti-colonial movements and institutions. While the Bandung Conference of 1955, the Suez Crisis of 1956, and the Afro-Asian People's Solidarity Conference of 1957, were all instrumental in making Egypt an international force in decolonization, I argue that the Congo Crisis of 1960 and onwards marked a turning point.<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup> Indeed, according to Jason Parker the crisis writ large was a “postwar moment of truth,” since it challenged the United Nations’ role in “North-South relations” and was a “catalyst for Afro-Asian unity.”<sup id="fnref:2"><a href="#fn:2" class="footnote">2</a></sup> <i>Visualizing Cairo's Congo Crisis</i> is a companion piece to a forthcoming article, which uncovers Cairo's role in the crisis, and contextualizes how the conflict went on to shape Egyptian anti-colonial politics. This digital project covers some of the same material, but zooms in on how computational methods can elucidate how the meanings of anti-colonialism(s) transformed over the 1960s.
        </p>
    </div>
    <div class="col three">
        <h2>Project Sections</h2>
        <ol>
            <li>
                <h4 id="toc1"><a href="#project_background">Project Background</a></h4>
            </li>
            <li>
                <h4 id="toc2"><a href="#congo_cairo">The Congo Crisis in Cairo</a></h4>
            </li>
            <li>
                <h4 id="toc3"><a href="#discourses_data">Discourses and Data</a></h4>
            </li>
        </ol>
    </div>
    <div class="row">
        <h3 id="project_background" class="col three">Project Background</h3>
        <p class="col two">
            This project was first conceived at the <a href="https://nationalhistorycenter.org/decolonization-seminar-2015/">International Seminar on Decolonization in August 2015</a>, as an exploration into Egypt's place in the Congo Crisis of the 1960s - an event that was on my radar after a few international histories had started to re-examine the conflict through the lenses of the Cold War and decolonization.<sup id="fnref:3"><a href="#fn:3" class="footnote">3</a></sup> While initially my seminar paper utilized diplomatic cables and Egyptian newspapers, I became particularly interested in the existence of Egyptian periodicals that were produced by the state and published in multiple languages. Flipping through the pages in these magazines, I quickly became fascinated with the ways in which they blurred the boundaries between political propaganda, news reporting, and public relations, all while circulating across the globe by the mid-1960s.
        </p>
        <div class="col one">
            <img src="{{ site.baseurl }}/assets/img/congo2.png" alt="Arab Observer July 1960" style="max-width:100%;" >
        </div>
        <p class="col three">
            While historians have used these magazines as sources, none have explored them of objects of inquiry outright. My larger research contextualizes them within the Egyptian state's expanding efforts to control and circulate information. <i>Visualizing Cairo's Congo Crisis</i> delves into the content of the magazines, and traces the coverage of one event (the Congo crisis) over the full-run of these magazines, with the aim of bridging together media and intellectual history to understand this political moment.
        </p>
        <p class="col three">
            To explore the discourses in these publications, I have employed a variety of digital and computational methods. Part of the rationale for these methods is the scale of these periodicals, given that there were dozens of these magazines printed in Cairo and elsewhere from the late 1950s to the 1970s. But more significant in my calculus is that these methods have forced me to confront what exactly I mean when I try to study meanings. In particular, understanding historical discourses with computational methods requires both formalizing the relationships between words that represent these ideas, and then also interpreting how statistical models can <i>and</i> cannot uncover these relationships.
        </p>
        <p class="col three">
            Ultimately, some of the findings from these models confirm our previous understandings of anti-colonialism. Yet fundamentally I believe that using computational methods produces new forms of knowledge that provide valuable additional evidence for my historical research. Rather than seeing these methods as a rehashing of qualitative versus quantitative knowledge hierarchies, I view them as a way for capturing concepts, albeit crudely, and making them commensurable within a set of curated sources.
        </p>
        <div class="col one">
            <a href="https://www.press.uchicago.edu/ucp/books/book/chicago/D/bo35853783.html" target="_blank"><img src="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226612836.jpg" alt="Distant Horizons" style="max-width:100%;"></a>
        </div>
        <p class="col two">
            In <a href="https://www.press.uchicago.edu/ucp/books/book/chicago/D/bo35853783.html" target="_blank"><i>Distant Horizons: Digital Evidence and Literary Change</i></a>, Ted Underwood describes this far more eloquently, with his concept of “perspectival modeling.” Underwood contends that “perspectival models do not aim simply to reproduce human judgement. They are used instead to measure the parallax between different observers.”<sup id="fnref:4"><a href="#fn:4" class="footnote">4</a></sup> Unlike earlier efforts to a priori define human phenomena as discrete variable, this ‘perspectival’ and ‘parallax’ approach <i>learns</i> a set of relationships depending on the data and ontologies provided. Instead of trying to replicate how humans would categorize documents, these methods capture relationships between words across a corpus, and in the process surface the most distinctive features for each of these categories. While this approach is most commonly used in spam email identification, this method has become increasingly popular in cultural analytics, including recent research exploring linguistic features of genre and the impact of publishing trends on literary language.<sup id="fnref:5"><a href="#fn:5" class="footnote">5</a></sup>
        </p>
        <p class="col three">
            Most of the methods I implement to do "perspectival modeling" were developed prior the period I study, but the relatively recent rise of computational power has only now made it trivial to utilize these approaches. The largest barrier remains acquiring relevant historical sources and transforming them into machine-readable datasets. To this end, I developed a web application called Image Lucida to do exactly this and you can read more about it <a href="{{ site.baseurl }}/projects/2_project/">here</a>. This project is very much a work-in-progress and so in the coming weeks, I plan to include more information about what I plan to experiment with next. Some initial ideas include scrollytelling interactivity, high dimensional reduction visualizations like tsne or umap to explore more of the data, and increasing my initial dataset. The next section provides some historical background to the Congo Crisis in Cairo.
        </p>
    </div>
     <div class="row">
        <h3 id="congo_cairo" class="col three">The Congo Crisis in Cairo</h3>
        <p class="col three">
            Prior to 1960, Egypt had already endeavored to promote Cairo as a hub for anti-colonial movements. After the revolution in 1952, Cairo became a refuge for nationalists from North African and Middle Eastern countries still under colonial rule.<sup id="fnref:6"><a href="#fn:6" class="footnote">6</a></sup> Then after the Bandung Conference of 1955, the Egyptian government increasingly offered support to nationalists from south of the Sahara, largely through scholarships to attend al-Azhar and funds to setup national liberation bureaus.<sup id="fnref:7"><a href="#fn:7" class="footnote">7</a></sup> After 1958, with the creation of the union with Syria, known as the United Arab Republic (UAR), and the emergence of what Malcolm Kerr termed the "Arab Cold War," Cairo was shifting its focus towards the African continent. Indeed, Helmi Sharawy, one of the Egyptian officials who worked initially for the African Association and then the Bureau, described 1960 as being of “crucial importance to the National Liberation of Africa, not only because the Declaration of Independence of All Colonised Peoples was adopted by the United Nations on 14 December, but also because it was the year where much was achieved in the way of clarifying the difference between the concepts of formal independence and real national liberation.”<sup id="fnref:8"><a href="#fn:8" class="footnote">8</a></sup>  While the UN declaration would only be signed at the end of 1960, Sharawy’s assertion about the difference between “formal independence and real national liberation” was an allusion to the Congo crisis, which first erupted that Summer and eventually challenged the very premise of Cairo’s involvement in African affairs.
        </p>
        <p class="col three">
            The conflict in Congo emerged within days of the initial independence celebrations, when the Congolese military mutinied against the white officers while mobs attacked the remaining enclaves of foreign colonialists. Widely reported in the international press as a parable for decolonization gone too far, Belgium used this pretext to support the enemies of the recently elected Prime Minister Patrice Lumumba, and to send Belgium troops to the province of Katanga, the copper-rich region of the country.<sup id="fnref:9"><a href="#fn:9" class="footnote">9</a></sup> On July 11, 1960 Moïse Tshombe, a former businessman and leader of the Confédération des associations tribales du Katanga (CONAKAT), announced the secession of Katanga with the backing of Belgium. The news from Congo set off a flurry of press releases and messages between Cairo and the rest of the world. This flurry of activities was reflected in both Egyptian media and on the streets of Cairo.
        </p>
        <p class="col three">
            On Monday August 1 and 2, 1960, Cairo “Congo Day”, these protests were organized by the NU; the African Association; and the Afro-Asian People’s Solidarity Organization (AAPSO), and included speeches from Mohamed Fuad Galal, the Deputy Speaker of the Egyptian National Union Assembly; Youssef al-Sibai, who was now the Secretary General of the Permanent Secretariat of the AAPSO; and Abdel Rashidov, the USSR delegate to the AAPSO in Cairo, as well as representatives of African liberation movements from Uganda, Algeria, Cameroon, Zanzibar, Northern Rhodesia, Somalia, and Ruanda-Urundi.   The speeches called for Belgium to end its imperialism in Africa, for the UN to negotiate the withdrawal of Belgium troops from the Congo, and lastly, for support of Patrice Lumumba to maintain the Congo’s “freedom, unity and sovereignty.”  According to the daily Egyptian newspaper, al-Ahram, the rally not only sent more cables to Hammarskjöld, but also to Lumumba, offering volunteers to fight Belgium imperialists and the support of “all concerned African citizens.” <sup id="fnref:10"><a href="#fn:10" class="footnote">10</a></sup>
        </p>
        <div class="row" style="justify-content:center;">
            <div>
                <img src="{{ site.baseurl }}/assets/img/congo1.png" alt="Congo Day" style="max-width:100%;" >
            </div>
        </div>
        <p class="col three">
            The speeches called for Belgium to end its imperialism in Africa, for the United Nations to negotiate the withdrawal of Belgian troops from the Congo, and lastly, for support of Patrice Lumumba to maintain the Congo’s “freedom, unity and sovereignty.”<sup id="fnref:11"><a href="#fn:11" class="footnote">11</a></sup> According to the daily Egyptian newspaper, *al-Ahram*, the rally even sent a cable to Lumumba offering volunteers to fight Belgium imperialists, inspired in part from Cairo’s struggle against imperialist aggression in the Suez Crisis of 1956. The rally also sent a cable to United Nations Secretary General, Dag Hammarskjöld about Congo Day and the desire for UN involvement in the Congo, claiming to represent all concerned African citizens. The demonstrations eventually dispersed after waiting at the Belgium Embassy for the Ambassador to address “the African freedom fighters.”<sup id="fnref:12"><a href="#fn:12" class="footnote">12</a></sup>
        </p>
        <p class="col three">
            Though there was coverage of Congo Day in the Egyptian dallies, the majority of these existing accounts come from the <i>Arab Observer</i>, which was one of the weekly magazines published by the Egyptian government. These publications were printed in multiple languages and largely modeled on <i>Newsweek</i>, and were marketed to a new international Arabic and non-Arabic speaking Third World audiences during the 1960s. Yet, the events of Congo Day in Cairo and the existence of magazines like the <i>Arab Observer</i> remain marginalized in both national histories of Egypt as well as global histories of the Congo crisis and the Third World. Relative to the entirety of the Congo crisis, the omission of Congo Day in Cairo is minor. Similarly, although Cairo was the capital for print in the Arab world, the <i>Arab Observer</i> represented a fraction of the news published in Cairo. Yet, protests over the Congo would continue to spill on to the streets of Cairo six months later after the murder of Patrice Lumumba and again three years later after American and Belgium involvement in the Simba Rebellion and Stanleyville in late 1964, while Egyptian information regime would become the model for decolonizing states seeking to challenge foreign news coverage, threatening both Western and Soviet interests in the Third World.
        </p>
        <p class="col three">
            While my larger article traces the long arc of the Congo crisis in Cairo, this next section contains my experiments to answer a related question - namely, how, if at all, did the Congo crisis influence discourses in Egypt? Answering this question requires exploring how historians writ large understand <i>'ideas'</i>, and how we can <i>and</i> cannot use computational methods to model these ideas.
        </p>
    </div>
</div>

<div class="wrapper">
    <div class="row">
        <h3 id="discourses_data" class="col three">Discourses and Data</h3>
        <p class="col three">
            When historians talk about concepts and ideas, rarely do we drill down to the exact relationships between words that represent these entities.
        </p>
        <h4 class="col three" style="text-align:center;">Congo Frequencies Per Year Compared to Total Words in the <i>Arab Observer</i>
        </h4>
        <div class="col three" id="fig1"></div>
    </div>
</div>
<div class="col three" id="fig2">
</div>
<div class="row" style="justify-content:center;">
    <div class="row" style="overflow: auto; padding:40px; max-width: 80%;border: lightgrey solid;margin: 50px;">
        <h4 class="col three" style="text-align:center;">Top Topics and Terms of Congo-Related Coverage in the <i>Arab Observer</i></h4>
            {% include vis_data.html %}
    </div>
</div>
<div style="display:flex; flex-direction:row; overflow: auto; padding:40px; border: lightgrey solid;margin: 50px;">
    <div id="vis"></div>
    <div style="display:flex; flex-direction:column;">
        <div id="click"></div>
        <div id="dist"></div>
        <div id="clear">
            <button type="button" id="clearTerms" style="background-color: #e7e7e7; color: black;">Clear selected terms</button>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="footnotes">
    <ol>
        <li id="fn:1">
        <p>For more on the 1957 conference, see Reem Abou-El-Fadl  "Building Egypt’s Afro-Asian Hub: Infrastructures of Solidarity and the 1957 Cairo Conference." *Journal of World History*, 2019. Project MUSE, <a href="doi:10.1353/jwh.2019.0048" target="_blank">doi:10.1353/jwh.2019.0048</a>.&nbsp;<a href="#fnref:1" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:2">
        <p> Jason C. Parker, Hearts, Minds, Voices: US Cold War Public Diplomacy and the Formation of the Third World. (New York: Oxford University Press, 2016), 144.&nbsp;<a href="#fnref:2" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:3">
        <p>&nbsp;<a href="#fnref:3" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:4">
        <p>Ted Underwood <i>Distant Horizons: Digital Evidence and Literary Change</i> (University of Chicago Press, 2019), xv.&nbsp;<a href="#fnref:4" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:5">
        <p>For examples, see Ted Underwood “Why an Age of Machine Learning Needs the Humanities” <i>Public Books</i> December 5 2018 <a href="https://www.publicbooks.org/why-an-age-of-machine-learning-needs-the-humanities/" target="_blank">https://www.publicbooks.org/why-an-age-of-machine-learning-needs-the-humanities/</a> and Dan Sinykin “How Capitalism Changed American Literature” <i>Public Books</i> July 17 2019 <a href="https://www.publicbooks.org/how-capitalism-changed-american-literature/" target="_blank">https://www.publicbooks.org/how-capitalism-changed-american-literature/</a>&nbsp;<a href="#fnref:5" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:4">
        <p>Embassy Cairo to Department of State, Aug 4 1960, Folder 310 Afro Asian People’s Solidarity Organization, Box 9, Egypt US Embassy General Records 1959-1961, RG 84&nbsp;<a href="#fnref:4" class="reversefootnote">↩</a></p>
        </li>
    </ol>
    </div>
</div>

<script type="text/javascript">
    // Scroll javascript
    var topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    var scrollButton = document.getElementById("scrollButton");
    var makeScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };
    window.onscroll = () => {makeScroll();};
    // Visualization javascript
    var spec = "/visualization.vl.json";
    var spec1 = "/distribution_viz.vg.json";
    var spec2 = "/test.vg.json";
    var fig1 = "/fig1_visualization.vg.json";
    let term = '';
    let terms = [];
    vegaEmbed('#fig1', fig1);
    // vegaEmbed('#fig2', spec2);
    $('#clear').click(() => {
        console.log('click');
        terms = [];
        getCounts('');
    });
    var getCounts = (term) => {
        terms.push(term);
        $.getJSON("/distribution_years.json", (data) => {
            let datasets = data.filter(da => terms.includes(da.term));
            let changeset = vega.changeset().remove(() => true).insert(datasets);
            view.change("data-c193be45f4546e6bef5e606183257717", changeset).run()
            let single_term = data.filter(da => da.term == term)[0];
            if (term.length > 0){
                $('#click').text(`Selected Term: ${single_term.term}, non-alignment score: ${(single_term['non-alignedness']).toFixed(3)}`);
            } else {
                $('#click').text(`Select Term`);
            }
        });
    }
    var distGraph = vegaEmbed('#dist', spec1).then(p => window.view = p.view);
    var pointsGraph = vegaEmbed('#vis', spec).then(({spec, view}) => {
        view.addEventListener('click', function (event, item) {
            if (item.datum.term.length > 0){
                term = item.datum.term;
                getCounts(term);
            }
        });

    });

</script>
