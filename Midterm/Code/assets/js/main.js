
//BELOW SCROLLING CODE NOT WORKING AS EXPECTED, THEREFORE DID NOT USE IT IN THE JS
// var lastScrollLeft = 0;
// $(window).scroll(function() {
//     var documentScrollLeft = $(document).scrollLeft();
//     if (lastScrollLeft != documentScrollLeft) {
//         console.log('scroll x');
//         lastScrollLeft = documentScrollLeft;
//     }
// });




//BELOW SCROLLING CODE NOT WORKING AS EXPECTED TOO, THEREFORE DID NOT USE IT IN THE JS
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
		
		//if the easing effects are desired:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1000);
		event.preventDefault();
	});
});




//BELOW CODE NOT WORKING AS EXPECTED, THEREFORE DID NOT USE
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




var itemVar = [];

for (var i=0; i<780; i++){
	var itemRef = "item"+String(i);
	var itemNum = String(i+1);
	itemVar.push(itemRef);
	$('.main').append('<div class="grid-item" id='+itemRef+'></div>'); //creating a div for each image and giving it reference id=itemRef 
	//USE BELOW LINE INSTEAD OF ABOVE LINE IF WANT TO SEE GRID NUMBERING
	// $('.main').append('<div class="grid-item" id='+itemRef+'>'+itemNum+'</div>');

}

console.log(itemVar);

var imgSrc = '';

var ourImgSrcArray = []; //creating an array for all image sources

	$(document).ready(function () {
		var jsonURL = "projectImages.json";
		$.getJSON(jsonURL, function (json) {
			
 			$.each(json.projectImages, function (index, image) {
      			// imgSrc = this.imgPath;
      			// var image = new Image();
      			// image.src = this.imgPath;
      			ourImgSrcArray.push(image.imgPath); //adding all image sources (i.e.paths) to the array with .push
      		});
 			console.log(ourImgSrcArray);

 			function appendArrayToArray(array1, array2){
				var selectedItem1;
				var selectedItem2;
				for (var index1=0; index1<780; index1++){
					selectedItem1 = array1.slice(index1,index1+1);
					selectedItem2 = array2.slice(index1,index1+1);
					console.log(selectedItem1);
					console.log(selectedItem2);
					//the below line is pulling an item from the array and appending it inside the div with the corresponding item reference number
					$("#"+selectedItem1).append('<img src="'+selectedItem2+'"; style="width:100%"; alt="oh no">');
				};
			}
			appendArrayToArray(itemVar,ourImgSrcArray);
 		});
	});

	

//Only three of the images are clickable (i.e. function as button) currently; they are #item1, #item747, #item408
$("#item1").click(function(){
	$("#placeholder1").removeClass("hidden");
  	$("#placeholder1").addClass("visible");
  	$('#placeholder1').html($('#item1'));

});

$("#item747").click(function(){
	$("#placeholder2").removeClass("hidden");
  	$("#placeholder2").addClass("visible");
  	$('#placeholder2').html($('#item747'));
});

$("#item408").click(function(){
	$("#placeholder3").removeClass("hidden");
 	$("#placeholder3").addClass("visible");
 	$('#placeholder3').html($('#item408'));
});

$("#studiomode").click(function(){
  	$('.grid-item').addClass("visible");
	$('#title').addClass("hidden");  	
	$('#stripe').addClass("hidden");  	
	$('#description').addClass("hidden");  	
});

$("#synergize").click(function(){
  	$('body').html($('<div id="layer2"></div>'));
});
