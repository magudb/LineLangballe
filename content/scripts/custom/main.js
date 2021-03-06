// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: EXPOSE.
// Author: Designova.
// Version 1.1 - Updated Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     
    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullwidth').css('width',vW);
     $('.halfwidth').css('width',vW/2);
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
  
    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });

    $('#submit').click(function(){
        if($("#ups").val().length<1){
            $.post("/php/send.php", $("#mycontactform").serialize(),  function(response) {
                $('#success').html(response);
               
            });
        }
        return false;

    });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

