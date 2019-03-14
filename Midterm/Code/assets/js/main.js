// var lastScrollLeft = 0;
// $(window).scroll(function() {
//     var documentScrollLeft = $(document).scrollLeft();
//     if (lastScrollLeft != documentScrollLeft) {
//         console.log('scroll x');
//         lastScrollLeft = documentScrollLeft;
//     }
// });




// $(document).ready(function(){
//     $('#main').hScroll(100); // You can pass (optionally) scrolling amount
// });

// jQuery(function ($) {
//     $.fn.hScroll = function (amount) {
//         amount = amount || 120;
//         $(this).bind("DOMMouseScroll mousewheel", function (event) {
//             var oEvent = event.originalEvent, 
//                 direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
//                 position = $(this).scrollLeft();
//             position += direction > 0 ? -amount : amount;
//             $(this).scrollLeft(position);
//             event.preventDefault();
//         })
//     };
// });

var app = app || {};

$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);
		
		//if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});
});

// $(document).ready(function () {
//   var jsonURL = "../projectImages.json";
//   $.getJSON(jsonURL, function (json)
//   {
//     var imgList= "";
 
//     $.each(json.projectImages, function () {
//       imgList += '<li><img src= "' + this.imgPath + '"></li>';
//   });
 
//    $('.main').append(imgList);
//   });
// });







for (var i=0; i<780; i++){
	var itemRef = "item"+String(i);
	var itemNum = String(i+1);
	$('.main').append('<div class="grid-item" id='+itemRef+'>'+itemNum+'</div>');

	var img = [e];
    var imgSrc = '';
	$(document).ready(function () {
		var jsonURL = "../projectImages.json";

		$.getJSON(jsonURL, function (json) {
 			$.each(json.projectImages, function () {
      			imgSrc = '<img src= "' + this.imgPath + '">';
      			img.push(imgSrc);
      		});
 		});
 	$("#"+itemRef).append(img[e]);
});


}



$("#item1").click(function(){
	$("#placeholder1").removeClass("hidden");
  	$("#placeholder1").addClass("visible");

});

$("#item2").click(function(){
	$("#placeholder2").removeClass("hidden");
  	$("#placeholder2").addClass("visible");
});

$("#item3").click(function(){
	$("#placeholder3").removeClass("hidden");
 	$("#placeholder3").addClass("visible");
});

$("#synergize").click(function(){
  	$('body').html($('<div id="layer2"></div>'));
});

// var $div = $("<div>", {id: "layer2", "class": "visible"});
// $div.click(function(){ /* ... */ });
// $("#box").append($div);

