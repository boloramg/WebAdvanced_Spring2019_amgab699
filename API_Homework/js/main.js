var ctx = document.getElementById('pollutionChart');
var Chart = require('chart.js');
var pollutionChart = new Chart(ctx, {
    type: 'pie',
    data: {
    	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
 	options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



$(document).ready(function(){
	$("#btn1").click(function(){
		$("#json-container").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/england", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			//$("#json-container").append(data.value.joke + "<br>");
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");

			})
		})
	})

	$("#btn2").click(function(){
		$("#json-container").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/scotland", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			//$("#json-container").append(data.value.joke + "<br>");
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");

			})
		})
	})

	$("#btn3").click(function(){
		$("#json-container").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/wales", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			//$("#json-container").append(data.value.joke + "<br>");
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");

			})
		})
	})
})

