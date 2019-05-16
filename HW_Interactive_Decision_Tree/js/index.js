window.onload = loadScreen();

function loadScreen() {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Do I have some time to kill?' : ['Yes', 'No', 0, 1],
        
        'Continue walking home': [],

        'Do I need anything new?' : ['Yes', 'No', 0, 1],
        
        'Do I want anything new?' : ['Yes', 'No', 0, 1],

        'Do they sell it here?' : ['Yes', 'No', 0, 1],
        
        'Do I want something else?' : ['Yes', 'No', 0, 1],
        
        'Can I afford to shop here?' : ['Yes', 'No', 0, 1],
 
      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -2; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          yesAnswer = arr[arr.length-2];
          noAnswer = arr[arr.length-1];
      
      if (givenAnswer === yesAnswer) { 
        if (current<6 && current!=3 && current!=5) {      
          current += 2;
          loadQuestion(current);
        } else if (current>=6) {
          questionArea.innerHTML = 'Please fashionably walk in.';
          answerArea.innerHTML = '';
          var a=document.querySelector('h3');
          a.classList.add('hidden');                        
        } else if (current === 3 || current === 5) {
          loadQuestion(4);
          current = 4;                        
        }
      }
      
      if (givenAnswer === noAnswer) {
        current = current + i;
        if (current === 1 || current === 4 || current === 6 || current === 7) {
          questionArea.innerHTML = 'Continue walking home.';
          answerArea.innerHTML = '';
          var a=document.querySelector('h3');
          a.classList.add('hidden');     
        } else {
          loadQuestion(current);
        }
      }                              
    };
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);

};

document.getElementById("reload").addEventListener("click", reloadFunction);
function reloadFunction (){
  var a=document.querySelector('h3');
  a.classList.remove('hidden');   
  loadScreen();
}


