// you have to have set "count" to 0 previously in embedded data in order for the counting to work

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
	
  // get the QID of the question that displays when they get the right answer
  // this is the only field that needs to change for each question
	var correct_QID = "QID4";
	
	var count = parseInt(Qualtrics.SurveyEngine.getEmbeddedData('count'));
	
	//make a fake next button
	function createNextButton() {
		var nextButtonHTML = '<input id="CustomNextButton" class="NextButton Button" title="→" type="button" name="NextButton" value="→" aria-label="Next">';
		jQuery('#Buttons').append(nextButtonHTML);
	}
	//actually create the next button
	createNextButton();
	
	//hide the actual next button
	this.hideNextButton();
	
	//when the fake next button is clicked, do something
	jQuery('#CustomNextButton').on('click', function() {
		var correct = document.getElementById(correct_QID);
		// if the correct answer is showing, then it behaves like a real click of the next button
		if (window.getComputedStyle(correct).display === "block") {
			//reset count to 0
			Qualtrics.SurveyEngine.setEmbeddedData('count', 0);
			$('NextButton').click();
		} 
		
		// if they already clicked next once and it was wrong, then just go forward
		else if (count == 1) {
			//reset count to 0
			Qualtrics.SurveyEngine.setEmbeddedData('count', 0);
			$('NextButton').click();
		}
		
		//if it's their first time clicking next and it was wrong, just increment counter
		else{
			count = count + 1;
			Qualtrics.SurveyEngine.setEmbeddedData('count', count);
		} 
	})
});
