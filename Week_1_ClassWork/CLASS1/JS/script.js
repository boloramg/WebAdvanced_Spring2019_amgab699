console.log("Hello hello!");

var greetingContainer;

greetingContainer = "This is a new variable";

console.log(greetingContainer);

// alert("Greetings: " + greetingContainer);

document.write("<p>" + greetingContainer + "</p>");

var attributes = ["Black", "Green", "Blue"];

var arrange = document.getElementsByClassName ("msg");

for (var i=0; i<attributes.length; i++) {
	for (var i = 0; i<arrange.length; i++) {
	arrange[i].innerHTML = attributes[i];
}
}



