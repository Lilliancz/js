//enter the script below into the javascript of qualtrics question
//make sure to put the "counter" embedded data in survey flow before this question appears

Qualtrics.SurveyEngine.addOnload(function()
{
// many thanks to ZiNNED on stackoverflow for the template
//https://stackoverflow.com/questions/24307514/while-mousedown-first-slowly-decrease-number-then-increase-decreasing-speed-j
    var counter = 0;
	var myWidth = 0;
    var myTimeout = null;
    var myInterval = null;

	document.getElementById("myButton").addEventListener("mousedown", increaseCounter);
	
	function increaseCounter() {
		if (counter <100){
			counter++;
			document.getElementById("counter").innerHTML = counter;
			myWidth = counter *5;
			document.getElementById("progressbar").style.width = myWidth+"px";
			Qualtrics.SurveyEngine.setEmbeddedData( 'counter', counter);

			myTimeout = setTimeout(function () {
			myInterval = setInterval(function () {
				 	if (counter <100){
						counter++;
						document.getElementById("counter").innerHTML = counter;			
						myWidth = counter *5;
						document.getElementById("progressbar").style.width = myWidth+"px";				
						Qualtrics.SurveyEngine.setEmbeddedData( 'counter', counter);
					}
				}, 75);
			}, 500);
		}
    }
	
	document.getElementById("myButton").addEventListener("mouseup", stopCounter);
	document.getElementById("myButton").addEventListener("mouseleave", stopCounter);
	
	function stopCounter() {
        clearTimeout(myTimeout);
        clearInterval(myInterval);
	}
	
	
	document.getElementById("clearButton").addEventListener("mousedown", startOver);
	
	function startOver() {
		counter = 0;
		document.getElementById("counter").innerHTML = counter;			
		myWidth = counter *5;
		document.getElementById("progressbar").style.width = myWidth+"px";
		Qualtrics.SurveyEngine.setEmbeddedData( 'counter', counter);
	}
	
  
});
