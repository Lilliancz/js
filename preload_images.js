//start
var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}

preload(
"https://umich.qualtrics.com/CP/Graphic.php?IM=IM_XXXXXXXXXXXXXXX",
"https://umich.qualtrics.com/CP/Graphic.php?IM=IM_XXXXXXXXXXXXXXX",

"https://umich.qualtrics.com/CP/Graphic.php?IM=IM_XXXXXXXXXXXXXXX",
"https://umich.qualtrics.com/CP/Graphic.php?IM=IM_XXXXXXXXXXXXXXX"
)
//end
