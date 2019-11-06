---
layout: post
title: Generalizing Static Sites
date: 2019-11-06
description: Thinking about static sites beyond individual libraries
---

Recently, at the CDH we were discussing the possibility of creating a research periodical using a static site, and the question came up regarding which library to choose. In digital humanities, Jekyll seems to be by far the preferred choice, but beyond DH, there's hundreds of options. Quickly, I realized that part of the issue for DHers is not so much actually getting a static site up an running, but understanding the larger landscape to decide which fits best for your project/problem.

So I quickly put together a workshop with the idea of talking more about the conceptual issues and technical tradeoffs around static sites, rather than getting people to install another programming library (though I do think that's the number one way you actually get a sense of static site libraries).

You can find the initial workshop notes [here](https://github.com/ZoeLeBlanc/static_site_workshop), and I'll be updating them in the coming days to include a bit more in-depth explanation of static sites (namely what is HTML, CSS, and Javascript). There's lots of links to resources and I tried to lay out the overall workflow of setting up a static site in using multiple libraries.

Regardless, though I tried to focus on these broader questions and how you can answer them.

1. What programming language are you interested in using or learning? Most of these involve using HTML, CSS, and JavaScript, but some like GatsbyJS require some knowledge of React whereas Jekyll only requires a tiny bit of Ruby to work in the Makefile

2. How much complexity will your site have? How many pages? How many different types of content? Some static site generators and themes make assumptions for how your content is organized so you may want to find a fairly close example project.

3. How many contributors? If you are working on a team, you'll want to invest in testing, continuous integration and deployment to make sure the site doesn't break. You'll also want to decide on an editorial process (for an example see [the submissions process for the Programming Historian](https://github.com/programminghistorian/ph-submissions)).

4. How much do you want to customize your site? Some static site generators like Gatsby are easier to customize the styling, whereas others have a whole host of themes to choose from but are harder to manipulate.