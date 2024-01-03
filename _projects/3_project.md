---
layout: page
title: Archivlo
description: Web app to help researchers find and share archival listings, 2016-Present
img: /assets/img/9.jpg
<!-- redirect: https://unsplash.com -->
display: True
year_start: 2016
---
Archivlo was a project I started thinking about while spending months doing my archival research. Historians often gush about going to the archives/doing archival research, but to be honest I had a really rough time when I was in the midst of my research. 

<iframe src="https://giphy.com/embed/bq6F8QYqBU7Yc" width="100%" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><figcaption> Me after traveling to multiple archives and struggling to manage everything I found.</figcaption>

First, I struggled to find some of the archives, and then I really had a hard time estimating the scope of what was in the archive. Maybe this is a skill you develop with experience, but most of the time I had to either restructure my trip or return to the archive, which was fairly expensive either way. I was also really frustrated with how I would find new material, which was trolling through footnotes and bibliographies. Now most historians consider this important work, and I agree. But I also think it come be a lot more efficient and not disadvantage scholars that don't have the networks to call on when searching for an archive. I started thinking about how archival researchers might work more collaboratively, and at the same time still get credit for their work in the archives.

<iframe src="https://giphy.com/embed/3o85xIO33l7RlmLR4I" width="100%" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yosub-girl-taco-why-not-both-3o85xIO33l7RlmLR4I">via GIPHY</a></p>

Thus, Archivlo was born.

The idea at the core of this project is that we can allow researchers to still be idiosyncratic in their archival research workflow, while still adding vast efficiencies about how archival holdings are identified. I've built an initial prototype [here](https://www.archivlo.com/) that is live and I've disabled the authentication so that you can go in and see a bit (fyi: some of the site data structures aren't loading properly at the moment). The site is built using Angular, Materialize, and Firebase. I also built a webscraper in Python and BeautifulSoup to get all the archives off of the [AHA's Archives Wiki](http://archiveswiki.historians.org/index.php/Main_Page). I also integrated the Hypothesis API, so you could pull your annotations of archives and research leads. 

A poster about Archivlo was accepted for presentation at DH 2017 in Montreal. You can read our abstract which has more details about the project <a href="{{site.baseurl}}/assets/pdf/ArchivloDigitizingtheArchivalResearchWorkflow.pdf" target="_blank">here</a>.

My next step is to do a significant refactor of the project for the poster. I'll be building out the backend probably in Python, but I'm trying to push myself and use Elixir, which is a functional programming language that's great for scaling an app. I'm also leaning towards using GraphQL and Postgres for the database. The idea of using some type of graph database/query language is key, because a lot of the issues of dealing with archives and archival collections is having to sort through confidence intervals about the quality of the results. What I hope to be able to build is a way to have results improve over time through user activity. I also want to help archivists find out which of their collections is getting the most attention, and if that corresponds to their usage stats. 

Obviously, I still have a long way to go before I reach all these goals, and I'm currently the only one working on the project which means progress is slow going. But I'm really excited to build my first beta version and start doing some user testing. I'm also very interested in working with others on this project, so please reach out if you have ideas or would like to be part of it.

[Latest updates for Archivlo](https://github.com/ZoeLeBlanc/Archivlo)


