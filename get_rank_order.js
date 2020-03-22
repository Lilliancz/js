Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/
  
	
});


Qualtrics.SurveyEngine.addOnReady(function()
{
	
var timer = document.querySelector('#timer');
var minutes;
var seconds;
var LSATsolved = 0;
var counter = 0;
	
(function() {
	//rate of data acquisition in ms is the delta
  	var time = 300000, //5 minutes total
		delta = 1000, // 1 sec increments
      		tid;

  tid = setInterval(function() {	
	  
	time -= delta;
	  counter++;
	 
    minutes = Math.floor(time / 60000);
	seconds = (time % 60000)/1000;
	if (seconds < 10) {seconds = "0"+seconds}
	timer.textContent = minutes + ":" + seconds ;
	  timer.style.display = "block";
	  
	  // if the responded has reached the limit, stop the interval, 
	  //  advance to the next question.
	  if ( time < 0 ){
		  clearInterval(tid);
		  timer.style.display = "none";
		  $('NextButton').click();
	  }
	  
    //if the puzzle has not yet been solved, continue to check
	  if (LSATsolved ==0){
      var aa=[];

      // this code grabs each rank order item on the page and adds it to a string
      jQuery("ul.ui-sortable li.ui-sortable-handle > span.label").each(function(){
      aa.push(jQuery(this).text().trim());
        // if the rank order matches the answer key, show the next button and save the duration
          if (aa == "D,F,C,E,B,A,G"){
              //alert("solved")
             $('NextButton').show();
              Qualtrics.SurveyEngine.setEmbeddedData( "LSATsolved", 1 );
            Qualtrics.SurveyEngine.setEmbeddedData( "LSATtime", counter );
            LSATsolved = 1;
            //alert(counter);
          }
        });
	  }
	  
  }, delta);
})();
	
	
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
