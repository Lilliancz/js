//this code preloads an array of images so that the user does not experience lag in downloading images later in the survey

//This specific set of images is labeled with values 1-42 in the filename, so they are not specified expicitly.
//Check the other preload example for specifying images directly

var myimages = [];
	for (i = 1; i < 43; i++) {
		myimages.push("http://umich.edu/~rosslab/self-other/Slide"+i+".PNG");
	}

var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
		alert( preload.arguments[i])
	}
}
preload.apply(null, myimages);
//end
