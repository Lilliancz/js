// this code presumes you have a DIV called "logup" and a DIV called "textTime" to show the timer text. 
// a huge thanks to Šime Vidas who wrote the base code on
// https://stackoverflow.com/questions/5766263/run-settimeout-only-when-tab-is-active
// to set the embedded data, you MUST preset the variables in the survey flow prior to the block
// variables to set: socialSec, focalSec, autoLimit

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	
var startTime = new Date().getTime() / 1000;	
var timeText = document.querySelector('#timeText');
var nowTime;	
var elapsedSec;	
var socialSec;	
var focalSec;
var popup = 0;
var limit = "${q://QID6/SelectedChoicesRecode}";
var autoLimit = "${e://Field/autoLimit}"
// the autoLimit is the number of seconds allowed for the entire question including focal and nonfocal tasks.
// it is set in the survey flow
	
var logup = document.querySelector('#logup');

(function() {
	//rate of data acquisition in ms is the delta
  	var time = 0,	
      		delta = 100,
      		tid;

  tid = setInterval(function() {
	  
	//get the time spent on the social tasks
	socialSec = elapsedSec - time/1000; 
		
	//if the focal task window is not focused, run this code
	if ( document.hidden ) { 		  
		  //if the social task duration exceeds the number, then pop up a new tab
		  if (socialSec > limit && popup == 0){
		  	var url = "https://umich.qualtrics.com/jfe/form/SV_9nMLFWoqyYBHhvD";
		  	window.open(url, '_blank'); 
		  	window.focus();
		  	popup = 1;
	  	}    
	}
    	//round to integer
	socialSec = socialSec.toFixed(1);
	//incremented time for each interval
	time += delta;
    	
	logup.textContent = (time / 1000).toFixed(1) + ' seconds spent on the focal task' ;
	focalSec = (time / 1000).toFixed(1);
	//calculate elapsed time
	nowTime = new Date().getTime() / 1000;	
	elapsedSec = nowTime - startTime; 
	  
	  // if the responded has reached the limit for the entire question, stop the interval, 
	  // record the data, and advance to the next question.
	  if ( elapsedSec > autoLimit ){
		  clearInterval(tid);
		 Qualtrics.SurveyEngine.setEmbeddedData( 'socialSec', socialSec );
		Qualtrics.SurveyEngine.setEmbeddedData( 'focalSec', focalSec );	
		  $('NextButton').click();
	  }
	//change the elapsed time text on screen
	timeText.textContent = "elapsed time is " + elapsedSec.toFixed(1) + ", time spent on other tasks is " + socialSec;
  }, delta);
})();
	
	
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
