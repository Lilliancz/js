//this code presumes you have a DIV called "logup" and a DIV called "textTime" to show the timer text. 
// a huge thanks to Šime Vidas who wrote the base code on
// https://stackoverflow.com/questions/5766263/run-settimeout-only-when-tab-is-active

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
var popup = 0;
	
var logup = document.querySelector('#logup');

(function() {
  var time = 0,
      delta = 200,
      tid;

  tid = setInterval(function() {
	  
	  //get the time spent on the social tasks
	  socialSec = elapsedSec - time/1000; 

	  //if the focal task window is not focused, run this code
	  if ( document.hidden ) { 		  
		  //if the social task duration exceeds the number, then pop up a new tab
		  if (socialSec > 10&&popup == 0){
		  	var url = "https://umich.qualtrics.com/jfe/form/SV_9nMLFWoqyYBHhvD";
		  	window.open(url, '_blank'); 
		  	window.focus();
		  	popup = 1;
	  	}    
	}
    
	//incremented time for each interval
	time += delta;
    logup.textContent = (time / 1000).toFixed(1) + ' seconds spent on the focal task' ;

	  //calculate elapsed time
	  nowTime = new Date().getTime() / 1000;	
	elapsedSec = nowTime - startTime; 
	
	  //change the elapsed time text on screen
	timeText.textContent = "elapsed time is " + elapsedSec.toFixed(1) + ", time spent on other tasks is " + socialSec.toFixed(1);
  }, delta);
	
})();
	
	
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
clearInterval(tid);
});
