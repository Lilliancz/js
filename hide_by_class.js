//when the button is clicked
document.getElementById("TO552").addEventListener("click", TO552);	

//the function that is called to hide all elements of the class "detail" 
	function hidealldetails(){
		    var divsToHide = document.getElementsByClassName("detail"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
		divsToHide[i].style.display = "none"; // depending on what you're doing
    }
}
	
//this function is called on the click - it calls the hide function and also shows a specific element by ID
	function TO552(){
		hidealldetails();
	document.getElementById("TO552Detail").style.display = 'block';
	}
