
Qualtrics.SurveyEngine.addOnReady(function()
{
	/*the QID1 variable should change to the QID of the question you want to toggle*/

	$("hideit").on("click", function(event) { 
		jQuery("#QID1").hide();
	}); 
	
	$("showit").on("click", function(event) { 
		jQuery("#QID1").show();
	}); 

	
});
