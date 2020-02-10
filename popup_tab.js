//Add this to the code of a survey where you want to add a timed pop up window-tab

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

    function openWindow( url )
	{
		window.open(url, '_blank'); 
		window.focus();
	}
	
	var x = setTimeout(function(){ 
		openWindow('https://umich.qualtrics.com/jfe/form/SV_9nMLFWoqyYBHhvD');
	}, 
	// this 5 seconds can be switch to a variable
	5000);
	
});
