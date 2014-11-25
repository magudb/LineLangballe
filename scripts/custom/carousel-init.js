/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

	
    $('.owl-carousel').owlCarousel({
        stagePadding: false,
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    })
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

