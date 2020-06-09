//enter the script below into the javascript of qualtrics question

Qualtrics.SurveyEngine.addOnload(function()
{
	
	
// many thanks to ZiNNED on stackoverflow for the template
//https://stackoverflow.com/questions/24307514/while-mousedown-first-slowly-decrease-number-then-increase-decreasing-speed-j
    var counter = 50;
    var myTimeout = null;
    var myInterval = null;

	document.getElementById("mybutton").addEventListener("mousedown", increaseCounter);
	
	
	function increaseCounter() {
        counter++;
        document.getElementById("counter").innerHTML = counter;
		document.getElementById("progressbar").style.width = counter+"px";

        myTimeout = setTimeout(function () {
        myInterval = setInterval(function () {
                counter++;
        		document.getElementById("counter").innerHTML = counter;			
				document.getElementById("progressbar").style.width = counter+"px";
            }, 75);
        }, 500);
    }
	
	document.getElementById("mybutton").addEventListener("mouseup", stopCounter);
	document.getElementById("mybutton").addEventListener("mouseleave", stopCounter);
	
	function stopCounter() {
        clearTimeout(myTimeout);
        clearInterval(myInterval);
	}
  
});
