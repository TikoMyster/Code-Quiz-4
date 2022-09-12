var containerQuestionEl = document.getElementById("question-container");
      var containerStartEl = document.getElementById("starter-container");
      var containerEndEl = document.getElementById("end-container")
      var containerScoreEl = document.getElementById("score-banner")
      var formInitials = document.getElementById("initials-form")
      var containerHighScoresEl = document.getElementById("high-score-container")
      var ViewHighScoreEl = document.getElementById("view-high-scores")
      var listHighScoreEl = document.getElementById("high-score-list")
      var correctEl = document.getElementById("correct")
      var wrongEl = document.getElementById("wrong")
      //buttons
      var btnStartEl = document.querySelector("#start-game");
      var btnGoBackEl = document.querySelector("#go-back")
      var btnClearScoresEl = document.querySelector("#clear-high-scores")
      //questions/answers element
      var questionEl = document.getElementById("question")
      var answerbuttonsEl = document.getElementById("answer-buttons")
      var timerEl = document.querySelector("#timer");
      var score = 0;
      var timeleft;
      var gameover
      timerEl.innerText = 0;

      
      var HighScores = [];

        
      var arrayShuffledQuestions
      var QuestionIndex = 0

    
      
      
      var questions = [
        { q: "Harry Potter's Father's Name is __________.", 
          a: '4. James Potter', 
          choices: [{choice: '1. Albus Dumbledore'}, {choice: '2. Voldemort'}, {choice: '3. Sirius Black'}, {choice: '4. James Potter'}]
        },
        { q: 'What is an Auror?', 
          a: '3. a person that catches dark wizards', 
          choices: [{choice: '1. a career counselor at hogwarts'}, {choice: '2. a professional quidditch player'}, {choice: '3. a person that catches dark wizards'}, {choice: '4. a wizard that can change his appearance at will'}]
        },
        { q: 'Who kills Professor Dumbledore?', 
          a: '4. Severus Snape', 
          choices: [{choice: '1. Bellatrix Lestrange'}, {choice: '2. Draco Malfoy'}, {choice: '3. Fanrir Greyback'}, {choice: '4. Severus Snape'}]
        },
        { q: 'Who is Fluffy?', 
          a: '1. A three-headed dog', 
          choices: [{choice: '1. A three-headed dog'}, {choice: '2. hermiones cat'}, {choice: "3. harry's owl"}, {choice: '4. Hagrids dragon'}]
        },
        { q: 'Which actor played the character Cedric Diggory?', 
          a: '1. Robbert Pattinson', 
          choices: [{choice: '1. Robbert Pattinson'}, {choice: '2. Tom Holland'}, {choice: '3. Robert Sheehan'}, {choice: '4. Daniel Radcliffe'}]
        },
        { q: 'What is the password to get from Hogwarts to Hogsmeade?', 
          a: '2. Dissendium', 
          choices: [{choice: '1. Balderdash'}, {choice: '2. Dissendium'}, {choice: '3. Slytherins are Supreme'}, {choice: '4. Mischief managed'}]
        },
        { q: "At the end of Harry Potter And The Philosopher's Stone' what was the final number of points that Gryffindor and Slytherin had?", 
          a: '3. 482 and 472', 
          choices: [{choice: '1. 420 and 420 '}, {choice: '2. 390 and 372'}, {choice: '3. 482 and 472 '}, {choice: '4. 582 and 490'}]
        },
        { q: "How many Hogwarts houses are there?", 
          a: '2. 4', 
          choices: [{choice: '1. 2'}, {choice: '2. 4'}, {choice: '3. 7'}, {choice: '4. 1'}]
        },
        { q: "Who created the Sorting Hat?", 
          a: '3. ', 
          choices: [{choice: '1. Albus Dumbledore'}, {choice: '2. Hagrid'}, {choice: '3. The founders of Hogwarts'}, {choice: '4. Godric Gryffindor'}]
        },
      ];
    
      
        
    var renderStartPage = function () {
        containerHighScoresEl.classList.add("hide")
        containerHighScoresEl.classList.remove("show")
        containerStartEl.classList.remove("hide")
        containerStartEl.classList.add("show")
        containerScoreEl.removeChild(containerScoreEl.lastChild)
        QuestionIndex = 0
        gameover = ""
        timerEl.textContent = 0 
        score = 0

        if (correctEl.className = "show") {
            correctEl.classList.remove("show");
            correctEl.classList.add("hide")
        }
        if (wrongEl.className = "show") {
            wrongEl.classList.remove("show");
            wrongEl.classList.add("hide");
        }
    }

     
    var setTime = function () {
        timeleft = 30;

    var timercheck = setInterval(function() {
        timerEl.innerText = timeleft;
        timeleft--

        if (gameover) {
            clearInterval(timercheck)
        }
       
        if (timeleft < 0) {
            showScore()
            timerEl.innerText = 0
            clearInterval(timercheck)
        }

        }, 1000)
    }

    var startGame = function() {
        
        containerStartEl.classList.add('hide');
        containerStartEl.classList.remove('show');
        containerQuestionEl.classList.remove('hide');
        containerQuestionEl.classList.add('show');
        
        arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5)
        setTime()
        setQuestion()
      }
    
    
    var setQuestion = function() {
        resetAnswers()
        displayQuestion(arrayShuffledQuestions[QuestionIndex])
    }

    
    var resetAnswers = function() {
        while (answerbuttonsEl.firstChild) {
            answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
        };
    };

    
    var displayQuestion = function(index) {
        questionEl.innerText = index.q
        for (var i = 0; i < index.choices.length; i++) {
            var answerbutton = document.createElement('button')
            answerbutton.innerText = index.choices[i].choice
            answerbutton.classList.add('btn')
            answerbutton.classList.add('answerbtn')
            answerbutton.addEventListener("click", answerCheck)
            answerbuttonsEl.appendChild(answerbutton)
            }
        };
    
    var answerCorrect = function() {
        if (correctEl.className = "hide") {
            correctEl.classList.remove("hide")
            correctEl.classList.add("banner")
            wrongEl.classList.remove("banner")
            wrongEl.classList.add("hide")
            }
        }  
    
    var answerWrong = function() {
        if (wrongEl.className = "hide") {
            wrongEl.classList.remove("hide")
            wrongEl.classList.add("banner")
            correctEl.classList.remove("banner")
            correctEl.classList.add("hide")
        }
    }

        
    var answerCheck = function(event) {
        var selectedanswer = event.target
            if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
                answerCorrect()
                score = score + 7
            }

            else {
              answerWrong()
              score = score - 1;
              timeleft = timeleft - 3;
          };

        
          QuestionIndex++
            if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
                setQuestion()
            }   
            else {
               gameover = "true";
               showScore();
                }
    }

        
    var showScore = function () {
        containerQuestionEl.classList.add("hide");
        containerEndEl.classList.remove("hide");
        containerEndEl.classList.add("show");

        var scoreDisplay = document.createElement("p");
        scoreDisplay.innerText = ("Your final score is " + score + "!");
        containerScoreEl.appendChild(scoreDisplay);
    }       
    
    
    var createHighScore = function(event) { 
        event.preventDefault() 
        var initials = document.querySelector("#initials").value;
        if (!initials) {
          alert("Enter your intials!");
          return;
        }

      formInitials.reset();

      var HighScore = {
      initials: initials,
      score: score
      } 

      
      HighScores.push(HighScore);
      HighScores.sort((a, b) => {return b.score-a.score});

    
    while (listHighScoreEl.firstChild) {
       listHighScoreEl.removeChild(listHighScoreEl.firstChild)
    }
    
    for (var i = 0; i < HighScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
      listHighScoreEl.appendChild(highscoreEl);
    }

      saveHighScore();
      displayHighScores();

    }
    
    var saveHighScore = function () {
        localStorage.setItem("HighScores", JSON.stringify(HighScores))
            
    }

    
    var loadHighScore = function () {
        var LoadedHighScores = localStorage.getItem("HighScores")
            if (!LoadedHighScores) {
            return false;
        }

        LoadedHighScores = JSON.parse(LoadedHighScores);
        LoadedHighScores.sort((a, b) => {return b.score-a.score})
 

        for (var i = 0; i < LoadedHighScores.length; i++) {
            var highscoreEl = document.createElement("li");
            highscoreEl.ClassName = "high-score";
            highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
            listHighScoreEl.appendChild(highscoreEl);

            HighScores.push(LoadedHighScores[i]);
            
        }
    }  

    
    var displayHighScores = function() {

        containerHighScoresEl.classList.remove("hide");
        containerHighScoresEl.classList.add("show");
        gameover = "true"

        if (containerEndEl.className = "show") {
            containerEndEl.classList.remove("show");
            containerEndEl.classList.add("hide");
            }
        if (containerStartEl.className = "show") {
            containerStartEl.classList.remove("show");
            containerStartEl.classList.add("hide");
            }
            
        if (containerQuestionEl.className = "show") {
            containerQuestionEl.classList.remove("show");
            containerQuestionEl.classList.add("hide");
            }

        if (correctEl.className = "show") {
            correctEl.classList.remove("show");
            correctEl.classList.add("hide");
        }

        if (wrongEl.className = "show") {
            wrongEl.classList.remove("show");
            wrongEl.classList.add("hide");
            }
        
    }
    
    var clearScores = function () {
        HighScores = [];

        while (listHighScoreEl.firstChild) {
            listHighScoreEl.removeChild(listHighScoreEl.firstChild);
        }

        localStorage.clear(HighScores);

    } 

    loadHighScore()
        
      
      btnStartEl.addEventListener("click", startGame)
      
      formInitials.addEventListener("submit", createHighScore)
      
      ViewHighScoreEl.addEventListener("click", displayHighScores)
      
      btnGoBackEl.addEventListener("click", renderStartPage)
      
      btnClearScoresEl.addEventListener("click", clearScores)