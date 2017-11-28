var questions = [
    {
        gifQuestion: "assets/img/1.gif",
        guesses: ["The Ring", "Devil's Backbone", "The Sixth Sence", "House of 1000 Corpes"],
        correctAns: "Devil's Backbone"
    },
    {
        gifQuestion: "assets/img/2.gif",
        guesses: ["The Plague of Zombies", "Zombie", "Night of the Living Dead", "The City of the Dead"],
        correctAns: "Night of the Living Dead"
    },
    {
        gifQuestion: "assets/img/3.gif",
        guesses: ["The Cabin in the Woods", "The Host", "28 Days Later", "Get Out"],
        correctAns: "Get Out"
    },
	{
        gifQuestion: "assets/img/4.gif",
        guesses: ["The Witch", "Let the Right One In", "New World", "Martyrs"],
        correctAns: "The Witch"
    },
    {
        gifQuestion: "assets/img/5.gif",
        guesses: ["Jacob's Ladder", "Misery", "Pet Sematary", "Child's Play"],
        correctAns: "Pet Sematary"
    },
    {
        gifQuestion: "assets/img/6.gif",
        guesses: ["Jessabelle", "The Gravedancers", "The Taking of Deborah Logan", "Anguish"],
        correctAns: "The Taking of Deborah Logan"
    },
    {
        gifQuestion: "assets/img/7.gif",
        guesses: ["The Ring", "The Grudge", "The Blair Witch Project", "Oculus"],
        correctAns: "The Ring"
    },
    {
        gifQuestion: "assets/img/8.gif",
        guesses: ["Night of the Demons", "The Hunger", "Sinister", "HellRaiser"],
        correctAns: "HellRaiser"
    },
    {
        gifQuestion: "assets/img/9.gif",
        guesses: ["The Sixth Sence", "The Strangers", "Paranormal Activity", "The Others"],
        correctAns: "Paranormal Activity"
    },
    {
        gifQuestion: "assets/img/10.gif",
        guesses: ["The Blair Witch Project", "The Tunnel", "As Above, So Bellow", "Evidence"],
        correctAns: "As Above, So Bellow"
    },
     {
        gifQuestion: "assets/img/11.gif",
        guesses: ["Rosemary's Baby", "The Exorsist", "Night of the Demon", "Poltergeist"],
        correctAns: "The Exorsist"
    },
    {
        gifQuestion: "assets/img/12.gif",
        guesses: ["The Conjuring", "The Haunting", "Oculus", "Darkness"],
        correctAns: "The Conjuring"
    },
    {
        gifQuestion: "assets/img/13.gif",
        guesses: ["The Visit", "Insidious", "Ouija", "Sinister"],
        correctAns: "Sinister"
    },
    {
        gifQuestion: "assets/img/14.gif",
        guesses: ["The Strangers", "Urban Legend", "Near Dark", "Misery"],
        correctAns: "Misery"
    },
    {
        gifQuestion: "assets/img/15.gif",
        guesses: ["From Dusk Till Dawn", "Innocent Blood", "Fright Night", "Planet Terror"],
        correctAns: "From Dusk Till Dawn"
    },
 ];

//create variables
	var correct = 0;
    var incorrect = 0;
    var qCounter = 0;
    var clickedAns; 
    var timer;
    var music = new Audio("assets/sounds/lostSouls.mp3");
    


$(document).ready(function(){
//call the audio file from the start
	music.loop = true;
	music.play();
	$("#errors").hide();
    $("#accepted").hide();

//Create count down. If time runs out increase by 1 incorrect answers 

    function countDown(secs, elem) {

        $("#timer").html(secs + " seconds");
        secs--;
        if (secs <= 0) {
            clearTimeout(timer);
            incorrect++;
            $("#errors").html("errors-" + incorrect);
         	createQuestion(qCounter++);
         	
            
		}
 timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);

}

//Use start button to show the questions
	$("#startBtn").on("click",function() {
        
		createQuestion();
        
	});

	function createQuestion() {
	    $("#startBtn").hide();
	    $("#errors").show();
	    $("#accepted").show();
	    countDown(15, "timer");
	 	
	   $(".giphy").css('background-image', `url(${questions[qCounter].gifQuestion}` );
	    
	    for (var i = 0; i < questions[qCounter].guesses.length; i++) {
	    	$('<button class="userGuess">').val(questions[qCounter].guesses[i]).html(questions[qCounter].guesses[i]).appendTo("#answersArea");}
	        $(".userGuess" ).click(function(event) {
	        	clearTimeout(timer);
		    	clickedAns = $(this).val();
		  		//alert(clickedAns);
				checkAnswer();
		  	});  	
	} 

	 function checkAnswer(){
				if (qCounter === 15) {
	            	//checkScore();
	           		gameOver();
	        		}

				else if (clickedAns === questions[qCounter].correctAns){
					correct++;
					//alert ("correct");
					$("#accepted").html("valid-" + correct);
		            newQuestion();
				    }

				else  {
					incorrect++;
					//alert ("incorrect");
					$("#errors").html("errors-" + incorrect);
		            newQuestion();
				   	}
			}
	
	 function newQuestion(){
	 	$(".userGuess" ).hide();
	 	createQuestion(qCounter++);
		clearTimeout(timer);
	 }

	function timeOut(){
        clearTimeout(timer);
        incorrect++;
        createQuestion(qCounter++);
    }
    

    
    function gameOver() {
        $("#results").html("You got " + correct + " correct, and " + incorrect + " incorrect");
        $("#gameBtn").show();
        $("#gameBtn").html("play again");
        $("#gameBtn").on("click", function() {
            location.reload();
    

        });

    }



});




