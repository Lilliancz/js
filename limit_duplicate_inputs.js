Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

	document.onkeyup=function(e){
		everything();
	}

	this.questionclick = function(event,element) {
		everything();
	}

	function everything() {
    //this code grabs all of the inputs and puts them into an array
			var inputs = jQuery(".SumInput input").map(function() {
			return this.value;
		  })
		  .get()
		  .join();
		console.log(inputs);
		//works up to here-LC 4/11

		var inputnum = inputs.split(",");
		var dup = 0;
		
		function count_duplicate(a){
		 let counts = {}

		 for(let i =0; i < a.length; i++){ 
			 if (counts[a[i]]){
			 counts[a[i]] += 1
			 } else {
			 counts[a[i]] = 1
			 }
			}  
			for (let prop in counts){
				if (counts[prop] >= 2){
					console.log(prop + " counted: " + counts[prop] + " times.");
					dup = 1;
					console.log(dup);
				}

			}
		  console.log(counts)
		}

		count_duplicate(inputnum)

		

	//if duplicate, hide the next button and show error
	if (dup==1){
		document.getElementById("NextButton").style.display = 'none';
		document.getElementById('error').innerHTML = "<strong><p style='background-color: #ffff42'>Please remember to not repeat any number answers. The  submit button will appear once the requirements are met.</p></strong>";
	}

	//if not duplicate, show the next button and hide error
	else{
		document.getElementById("NextButton").style.display = 'block';
		document.getElementById('error').innerHTML = "";
		}

}

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
