// you have to have set "count" to 0 previously in embedded data in order for the counting to work
// this code assumes you have already created a question that holds a hidden hint
// <div id="hint" style="display:none"></div>
// a placeholder for fake buttons <div id ="showbuttons"></div>
// a placeholder for the hidden correct answer <div id="correct" style="display:none"></div>

Qualtrics.SurveyEngine.addOnReady(function()
{
	
//if there are 2 inputs for the question, all you need to do is update these 2 values. The rest can be left untouched.
	var correctAnswer1 = 612.5;
	

	//hide the hint if their answers are correct on keyup
	var inputs = jQuery("#"+this.questionId+" .SumInput input");
	inputs.keyup(function() {
		//grab the constant sum entries
		var one = jQuery("#"+currentQuestionID+" .SumInput input").eq( 0 ).val();
		
		// if the correct answer is showing, then it behaves like a real click of the next button
		if (one == correctAnswer1) {
			document.getElementById("hint").style.display="none";
			document.getElementById("correct").style.display="block";
			document.getElementById("ShowAnswerButton").style.display="none";
		} 
		else {
			document.getElementById("correct").style.display="none";
		}
	})
	
	//this script automatically grabs the questionID as long as the JS is on the question
	var currentQuestionID = this.getQuestionInfo().QuestionID;
 //  alert("Current Question ID is: " + currentQuestionID);
	
	//grab the count as embedded data - it must be previously set in the survey flow to 0
	var count = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('count'));
	
	//make a fake buttons and hide constant sum total
	function createButtons() {
		var buttonHTML = '<input id="CustomNextButton" class="FakeButton Button" title="→" ' 
		+ 'type="button" name="CustomNextButton" value="→" aria-label="Next">'
		+ '<input id="ShowAnswerButton" style = "display:none" class="FakeButton Button" title="Show Answer" ' 
		+ 'type="button" name="ShowAnswerButton" value="Show Answer" aria-label="Show Answer">'
		+ '<style>.Total {display: none !important;}</style>';
		jQuery('#showbuttons').append(buttonHTML);
	}
	//actually create the  buttons
	createButtons();
	
	//hide the actual next button
	this.hideNextButton();

	//when the fake next button is clicked, do something
	jQuery('#CustomNextButton').on('click', function() {
		//alert(count);
		//grab the constant sum entries
		var one = jQuery("#"+currentQuestionID+" .SumInput input").eq( 0 ).val();
		
		// if the correct answer is showing, then it behaves like a real click of the next button
		if (one == correctAnswer1) {
			//reset count to 0
			Qualtrics.SurveyEngine.setEmbeddedData('count', 0);
			$('NextButton').click();
		} 
		
		// if they already clicked next once and it was wrong, then show hint
		else if (count == 1) {
			//alert(count);
			//show hint - this element needs to be specified on the page
			document.getElementById("hint").style.display="block";
			count = count + 1;
			Qualtrics.SurveyEngine.setEmbeddedData('count', count);
		}
		
		// if they already clicked twice and it was wrong, then show answer button
		else if (count == 2) {
			//alert(count);
			//reset count to 0
			document.getElementById("ShowAnswerButton").style.display="block";
			count = count + 1;
			Qualtrics.SurveyEngine.setEmbeddedData('count', count);
		}
		
		//if it's their first time clicking next and it was wrong, just increment counter
		else{
			count = count + 1;
			//alert(count);
			Qualtrics.SurveyEngine.setEmbeddedData('count', count);
		} 
		})
	
	jQuery('#ShowAnswerButton').on('click', function() {
		jQuery("#"+currentQuestionID+" .SumInput input").eq( 0 ).val(correctAnswer1);
		document.getElementById("hint").style.display="none";
		document.getElementById("ShowAnswerButton").style.display="none";
	})
	
});
