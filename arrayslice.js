Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

//list all 30 URLs here
var product30 = ['http://www.umich.edu/~rosslab/tim/Paper1.jpg',
'http://www.umich.edu/~rosslab/tim/Paper2.jpg',
'http://www.umich.edu/~rosslab/tim/Paper3.jpg',
'http://www.umich.edu/~rosslab/tim/Paper4.jpg',
'http://www.umich.edu/~rosslab/tim/Paper5.jpg',
'http://www.umich.edu/~rosslab/tim/Paper6.jpg',
'http://www.umich.edu/~rosslab/tim/Paper7.jpg',
'http://www.umich.edu/~rosslab/tim/Paper8.jpg',
'http://www.umich.edu/~rosslab/tim/Paper9.jpg',
'http://www.umich.edu/~rosslab/tim/Paper10.jpg',
'http://www.umich.edu/~rosslab/tim/Paper11.jpg',
'http://www.umich.edu/~rosslab/tim/Paper12.jpg',
'http://www.umich.edu/~rosslab/tim/Paper13.jpg',
'http://www.umich.edu/~rosslab/tim/Paper14.jpg',
'http://www.umich.edu/~rosslab/tim/Paper15.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic1.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic2.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic3.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic4.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic5.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic6.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic7.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic8.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic9.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic10.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic11.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic12.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic13.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic14.jpg',
'http://www.umich.edu/~rosslab/tim/Plastic15.jpg'] 	


//this function will shuffle the array

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
	
//call the shuffle function	
shuffle(product30);
	
//save only the first 10 of the shuffled array 	
var product10 = product30.slice(0, 10);

//embed the 10 products as embedded variables 
//make sure they appear in the survey flow first
Qualtrics.SurveyEngine.setEmbeddedData('P1', product10[0]);
Qualtrics.SurveyEngine.setEmbeddedData('P2', product10[1]);
Qualtrics.SurveyEngine.setEmbeddedData('P3', product10[2]);
Qualtrics.SurveyEngine.setEmbeddedData('P4', product10[3]);
Qualtrics.SurveyEngine.setEmbeddedData('P5', product10[4]);
Qualtrics.SurveyEngine.setEmbeddedData('P6', product10[5]);
Qualtrics.SurveyEngine.setEmbeddedData('P7', product10[6]);
Qualtrics.SurveyEngine.setEmbeddedData('P8', product10[7]);
Qualtrics.SurveyEngine.setEmbeddedData('P9', product10[8]);
Qualtrics.SurveyEngine.setEmbeddedData('P10', product10[9]);

	
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
