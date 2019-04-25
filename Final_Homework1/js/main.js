//1.

const Clarifai = require('clarifai');

// Instantiate a new Clarifai app by passing in your API key.
const app = new Clarifai.App({apiKey: 'f17933226feb4ddea3e8c260b9fc428c'});

// Predict the contents of an image by passing in a URL.
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
  .then(response => {
    console.log(response);
    console.log("Hello, this is my own custom message to show with the response to this call.");
  })
  .catch(err => {
    console.log(err);
  });

//2.
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


//NOT SURE HOW TO COMBINE 1 AND 2. TRIED A FEW DIFFERENT WAYS, BUT NEED MORE TIME TO REALLY UNDERSTAND.
//Problem is that 'require' at line 3 is not a known method when Node.js is not initialized. But the only 
//way I know how to initialize Node.js is through the command prompt interface, and this initialization
//is not connected to the HTML file...???