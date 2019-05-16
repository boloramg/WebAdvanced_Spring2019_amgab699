var labelsForChart = new Array();
var dataForChart = new Array();
var bgColorArray = [
			            'rgba(255, 99, 132, 0.75)',
			            'rgba(154, 162, 235, 0.75)',
			            'rgba(255, 206, 86, 0.75)',
			            'rgba(75, 192, 192, 0.75)',
			            'rgba(153, 102, 255, 0.75)',
			            'rgba(255, 159, 64, 0.75)',
			            'rgba(175, 192, 192, 0.75)',
			            'rgba(153, 12, 255, 0.75)',
			            'rgba(255, 159, 4, 0.75)'
			            ];
var brColorArray = [
			            'rgba(255, 99, 132, 1)',
			            'rgba(154, 162, 235, 1)',
			            'rgba(255, 206, 86, 1)',
			            'rgba(75, 192, 192, 1)',
			            'rgba(153, 102, 255, 1)',
			            'rgba(255, 159, 64, 1)',
			            'rgba(175, 192, 192, 1)',
			            'rgba(153, 12, 255, 1)',
			            'rgba(255, 159, 4, 1)'
			            ];			            


$(document).ready(function(){
	$("#btn1").click(function(){
		labelsForChart = [];
		dataForChart = [];
		$("#pollutionChart").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/england", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				labelsForChart.push(key.fuel);
				dataForChart.push(key.perc);
				//$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");
			});
			var ctx = document.getElementById('pollutionChart');
			var pollutionChart = new Chart(ctx, {
		    	type: 'pie',
		    	data: {
		        	labels: labelsForChart,
		        	datasets: [{
		            	label: 'Sources of Pollution',
			            data: dataForChart,
			            backgroundColor: bgColorArray,
			            borderColor: brColorArray,
			            borderWidth: 1
			        }]
			    },
			    options: {
			    }
			});	
		});
		console.log(labelsForChart);
		console.log(dataForChart);	
	})

	$("#btn2").click(function(){
		labelsForChart = [];
		dataForChart = [];
		$("#pollutionChart").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/scotland", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			//$("#json-container").append(data.value.joke + "<br>");
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				labelsForChart.push(key.fuel);
				dataForChart.push(key.perc);
				//$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");
			});
			var ctx = document.getElementById('pollutionChart');
			var pollutionChart = new Chart(ctx, {
		    	type: 'pie',
		    	data: {
		        	labels: labelsForChart,
		        	datasets: [{
		            	label: 'Sources of Pollution',
			            data: dataForChart,
			            backgroundColor: bgColorArray,
			            borderColor: brColorArray,
			            borderWidth: 1
			        }]
			    },
			    options: {
			    }
			});
		});
		console.log(labelsForChart);
		console.log(dataForChart);
	})

	$("#btn3").click(function(){
		labelsForChart = [];
		dataForChart = [];
		$("#pollutionChart").empty();
		$.getJSON(" https://api.carbonintensity.org.uk/regional/wales", function(data){
			console.log (data);
			console.log (data.data[0].data[0].generationmix);
			//$("#json-container").append(data.value.joke + "<br>");
			$.each(data.data[0].data[0].generationmix, function(index, key){
				console.log(key.fuel);
				console.log(key.perc);
				labelsForChart.push(key.fuel);
				dataForChart.push(key.perc);
				//$("#json-container").append(key.fuel + "<br>" + key.perc + "<br>" + "<br>");
			});
			var ctx = document.getElementById('pollutionChart');
			var pollutionChart = new Chart(ctx, {
		    	type: 'pie',
		    	data: {
		        	labels: labelsForChart,
		        	datasets: [{
		            	label: 'Sources of Pollution',
			            data: dataForChart,
			            backgroundColor: bgColorArray,
			            borderColor: brColorArray,
			            borderWidth: 1
			        }]
			    },
			    options: {
			    }
			});
		})
		console.log(labelsForChart);
		console.log(dataForChart);
	})
})

