Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
document.getElementById("anagram").addEventListener("click", anagram);	
document.getElementById("math").addEventListener("click", math);	
	var anagramCount = parseInt("${e://Field/anagramCount}");
	var mathCount = parseInt("${e://Field/mathCount}");	
	var switchToAnagram = parseInt("${e://Field/switchToAnagram}");
	var switchToMath = parseInt("${e://Field/switchToMath}");
	var current = "${e://Field/current}";
	
	function anagram(){
	//alert("A");
	document.getElementById("focaltask").innerHTML = "THIS IS THE ANAGRAM TASK";
	anagramCount += 1;
	Qualtrics.SurveyEngine.setEmbeddedData('anagramCount', anagramCount );
	//alert("a "+anagramCount);
	if (current == "M"){
		switchToAnagram += 1;
		//alert("switch to a "+switchToAnagram);
		Qualtrics.SurveyEngine.setEmbeddedData('switchToAnagram', switchToAnagram );
	} 
	current = "A";
	Qualtrics.SurveyEngine.setEmbeddedData('current', current );
		//alert(current);
									   }

	function math(){
		//alert("M");
	document.getElementById("focaltask").innerHTML = "THIS IS THE MATH TASK";
	mathCount += 1;
	Qualtrics.SurveyEngine.setEmbeddedData('mathCount', mathCount );
	//alert("m "+mathCount);
	if (current == "A"){
		switchToMath += 1;
		//alert("switch to m "+switchToMath);
		Qualtrics.SurveyEngine.setEmbeddedData('switchToMath', switchToMath );
	} 
		current = "M";
	Qualtrics.SurveyEngine.setEmbeddedData('current', current);
		//alert(current);
									   }
});
