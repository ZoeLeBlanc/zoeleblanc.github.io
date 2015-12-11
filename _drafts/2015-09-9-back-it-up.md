---
layout: post
title: "Back It Up"
date: 2015-09-09
categories: digital academia history
author_name : Zoe 
author_url : /author/zoe
author_avatar: zoeworkphoto1
show_avatar : false
read_time : 6
feature_image: feature-notebook
show_related_posts: true
square_related: recommend-peak
---
    Back, back, back it up (Awww $#*!) - Lil Jon, "Get Low" 2002

In my pre-grad school life, I worked in a computer store. One of my most memorable customers was a PhD student whose laptop crashed. While crashed laptops were a staple at the store (*shakes fist at at you Toshiba, HP, and Dell*), he was memorable because of the sheer misery on his face because he didn't have a backup of his dissertation. 

I've known that pain too. My final year of undergrad, I essentially did the equivalent of drop kicking my laptop when I decided to watch the six hour BBC version of Pride and Prejudice while my laptop ominously clicked away. [^1] 

**So how to avoid this wretched fate?**

Well, you're in luck because I have some tried and tested tips to share on backing up and preserving your data.

>First, thing you need to realize is that there is no one template for how to create a smart data backup system.[^2] 

That being said, I do think there is a way to be more mindful about why and how you backup your data. In grad school, we talk a lot about research questions and methods, but never about research work flow. This omission is quickly becoming a problem as more and more historians are using digital cameras and scanners. These tools are letting us gather big data sets but were left scratching our heads at how to deal with a terabyte or two of pictures.[^3] I like to think of this dilemma as the 'big little data problem'.These data problems are big for us historians, but little compared to actual big data in other fields.

*****
On small caveat - this post is mostly about how to deal with this problem of too much data for your hard drive. If you're looking for advice on how to backup your notes and a few photos, then I've heard good things about Backblaze and Crashplan. Here's a pretty [decent review of the two](http://thesweetsetup.com/apps/best-cloud-backup-service/). Personally, I'm a big fan of the in-cloud apps in Google Drive for editing and sharing documents. I used to rely on Dropbox, but lately I've found it glitchy for finding materials and not great with the in-cloud apps. There's also a new cloud backup startup called [UpThere](https://www.upthere.com/), which claims to offer a smart cloud option for all your photos and documents. They only have a beta version but the Mac desktop app is really sleek.

*****

So returning to this 'big little data problem'. My solution involved considering a number of factors:

* **Cost.** I wanted as cheap a solution possible.
* **Redundicies.** I wanted to be sure that I had enough duplicates in both cloud and physical form that I would never experience data lost.
* **Ease of transferring/accessing data.** I wanted a solution that did not take weeks to load the data to a cloud service, and would allow me to transfer data between multiple OS.
* **Keep data in the original form.** I wanted to make sure that my data was kept as 'raw' as possible so that if certain programs became obsolete I could always access all my materials. 

Some things I decided I didn't need were the ability to edit my data, whether docs or pics, in the cloud, and I didn't need a file management system. I'm also not that concerned with encryption, though I would prefer some rather than none. Essentially I wanted a complete copy of my data as I had organized it on my hard drive. 

While having a clear picture helped, I still found it difficult to decide which solution was best for me, especially in regards to cloud solutions. For external hard drives, I've always liked the WD MyPassports for Mac, as they were more reliable when I worked at the computer store than Seagate or Lacie. I would ideally like to get a solid state but I'm waiting a year or two for the price to drop and the storage size to increase. If you have the money, solid state is the way to go though.

For cloud storage, the amount of choice can be a bit daunting as were currently into a race to the bottom type mentality between a few different providers. When I first started writing this post I was using Amazon Web Services, with a combination of their S3 and Glacier options. However in recent weeks, I started getting frustrated with AWS and reading up on their crazy pricing structure. I also learned about Google Nearline, which offers many of the same features of AWS Glacier without the hassle or weird pricing. I found this [great hacker news post](https://news.ycombinator.com/item?id=9183830) debating the relative merits of various backup options if you want more information.   

![pricecomparisonfromarqbackup]({{site.url}}/img/post-assets/pricingcloudstorage.jpg)

http://gaul.org/object-store-comparison/

    **Pricing**
    Amazon Cloud Drive unlimited data storage for $59.99/year
    Google Drive 15GB free or 1TB/user for $10/month
    Dropbox 2GB free or 1TB for $9.99/month
    Amazon S3 free tier for 5GB 1 year or $0.3/GB per month
    Amazon Glacier $0.1/GB per month + $0.05/GB in per request fees

However, the one downside of AWS is the lack of userface. AWS is really more geared towards large scale business solutions, and so until recently, unless you were comfortable with the command line there was a pretty step learning curve. In the last two years though, a number of companies have started building interfaces for AWS. My favorite and current choice is Arq Backup by Haystack Software. You can fine more information on them [here](https://www.arqbackup.com), as well as a free thirty day trial of Arq.

The reasons I like Arq is because it makes using AWS Glacier and S3 as my cloud backup seamless. Arq has great tutorials for setting up your AWS accounts, and also works with other backup services like Dropbox and Google Drive. I decided on AWS Glacier and S3 because of the price (I pay about $6 a month) and the backup speed, which was substantially faster than Dropbox. Now that I've set up Arq, I just plug in my external hard drive and automatically it backs up to AWS. Arq keeps versions of files and backups all file formats. Arq also works great for transfering files between operating systems and has some serious encrycption. If you want to read about Arq features, check out their website [https://www.arqbackup.com/features/](https://www.arqbackup.com/features/).









 
* * * * * 
[^1]: By the way if you hear a clicking noise from your laptop, immediately shut it down and take it in to a store to get the data removed and your hard drive replaced. Or skip all this fear and just buy a solid state drive.
[^2]: In this post, I'm breaking apart data backup from data management. I realize the two are pretty intertwined but for sake of space and clarity, I'm only going to try and tackle the former.
[^3]: On one archival trip, my computer got so overloaded with data that there wasn't even enough short term data to run programs so trust me when I say that this is a problem that I've also had to deal with.
