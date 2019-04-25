var http = require('http');
const Clarifai = require('clarifai');

// Instantiate a new Clarifai app by passing in your API key.

http.createServer(function (req, app) {
	const app = new Clarifai.App({apiKey: 'f17933226feb4ddea3e8c260b9fc428c'});

	// Predict the contents of an image by passing in a URL.
	app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
	  .then(response => {
	    console.log(response);
	  })
	  .catch(err => {
	    console.log(err);
	  });
}).listen(8080);