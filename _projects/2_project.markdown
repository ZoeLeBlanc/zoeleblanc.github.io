---
layout: page
title: Image Lucida
description: Web app for to help create datasets from archival images, 2017-Present
img: /assets/img/feature-fujifilm.png
---

I started working on Image Lucida as my final project at the Nashville Software School. The idea for the app was born out of my frustrations trying to digitize archival materials and extract meta-data from them. I've been using for a few years a combination of DevonThink and AbbyFinereader, but I really struggled with basic image file managment (my DevonThink projects would get too large to open) and OCRing files without extracting images. 

Image Lucida solves these problems and let's me fully digitize my research workflow.
First, I can create projects and folders with relevant information about what they contain.
<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/image_lucida_1.png" alt="" title="example image"/>
</div>
<div class="col three caption">
    Screenshot of the main projects area
</div>
Then, I can upload images to AWS S3 instance, transform the images to fix any skewed perspective, add meta-data, and place them in a folder.
<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/image_lucida_2.png" alt="" title="example image"/>
</div>
<div class="col three caption">
    Screenshot of the view folders area, showing each image and it's properties in the folder
</div>
Finally, I can process the individual photos using a combination of OCR, manual image segmentation, and automated image segementation. Initially, I had hoped to use just automated image segmentation using a combination of OpenCV and scikit-image, but the newspaper microfilm copies I have were getting really low OCR rates. So now I manually segment the articles out of my newspapers and then process them with Tesseract or Google Vision OCR APIs. 
<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/image_lucida_2.png" alt="" title="example image"/>
</div>
<div class="col three caption">
    Screenshot of the manual segmentation of a newspaper.
</div>
At the end of the process, I now have an archival image that has searchable text, segmented images, and is tagged for later classification.

Image Lucida was initially built in Django, Python, and Angular. I used a dbsqlite and AWS to store everything. The OCR was completed with the Tesseract and Google Vision APIs, and the image segmentation with Pillow, OpenCV, and scikit-image. I'm currently working on deploying the website live on heroku. You can find some of my analysis using Image Lucida in my Depictions of Decolonization project.

[Latest updates for Image Lucida](https://github.com/ZoeLeBlanc/ImageLucida)

<img id="project_gif" src="{{ site.baseurl }}/assets/img/image_lucida.gif" alt="" title="example image"/>
    