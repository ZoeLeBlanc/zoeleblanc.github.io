"use strict";


$(document).ready(function(){

  // hide .navbar first
  $("#nav-buddy").hide();
  /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
  // var aChildren = $(".nav-wrapper ul li").children(); // find the a children of the list items
  // var aArray = []; // create the empty aArray
  // for (var i=0; i < aChildren.length; i++) {    
  //     var aChild = aChildren[i];
  //     var ahref = $(aChild).attr('href');
  //     aArray.push(ahref);
  // } // this for loop fills the aArray with attribute href values

  // $(window).scroll(function(){
  //   var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
  //   var windowHeight = $(window).height(); // get the height of the window
  //   var docHeight = $(document).height();

  //   for (var i=0; i < aArray.length; i++) {
  //       var theID = aArray[i];
  //       var divPos = $(theID).offset().top; // get the offset of the div from the top of page
  //       var divHeight = $(theID).height(); // get the height of the div in question
  //       if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
  //         $("a[href='" + theID + "']").addClass("active");
  //       } else {
  //         $("a[href='" + theID + "']").removeClass("active");
  //       }
  //   }
  //   if(windowPos + windowHeight == docHeight) {
  //     if (!$(".nav-wrapper ul li:last-child a").hasClass("active")) {
  //       var navActiveCurrent = $(".active").attr("href");
  //       $("a[href='" + navActiveCurrent + "']").removeClass("active");
  //       $(".navwrapper ul li:last-child a").addClass("active");
  //     }
  //   }
 
 

  // fade in #nav-buddy
  $(function () {
      $(window).scroll(function () {

               // set distance user needs to scroll before we start fadeIn
          if ($(this).scrollTop() > 100) {
              $('#nav-buddy').fadeIn();
          } else {
              $('#nav-buddy').fadeOut();
          }

      });
  });
 
  $('.scrollspy').scrollSpy();


});
