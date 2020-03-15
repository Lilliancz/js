<script>
//add this script to your look and feel.
//Make sure to also have included "Q_TotalDuration" and "limit" as embedded data in your survey flow
//set limit to the number of seconds for the survey duration
//this code presumes you have no forced responses, so it can forward to the end on each screen



Qualtrics.SurveyEngine.addOnReady(function()
{
	var duration = parseInt("${e://Field/Q_TotalDuration}");
	var limit = parseInt("${e://Field/limit}");
	var delta = 500; //how many ms between intervals
	(function() {
		var checklimit = setInterval(function() {

			if (duration > limit) {
				$('NextButton').click();
				clearInterval(checklimit)
			}
			duration = duration + delta/1000;

		 }, delta);
	})();

});
</script>
