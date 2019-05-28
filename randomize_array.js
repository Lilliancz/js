
//items in the array
var MixerARPs = ["","<span style=font-size: 14pt;>Regular Price - <u><strong>$349.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$429.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$499.99</strong></u></span>"];

var CameraARPs = ["","<span style=font-size: 14pt;>Regular Price - <u><strong>$139.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$169.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$199.99</strong></u></span>"];

var LaptopARPs = ["","<span style=font-size: 14pt;>Regular Price - <u><strong>$649.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$749.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$899.99</strong></u></span>"];

var JuiceARPs = ["","<span style=font-size: 14pt;>Regular Price - <u><strong>$36.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$44.99</strong></u></span>","<span style=font-size: 14pt;>Regular Price - <u><strong>$44.99</strong></u></span>"];

//this function shuffles your array 
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

shuffle(MixerARPs);
shuffle(CameraARPs);
shuffle(LaptopARPs);
shuffle(JuiceARPs);

Qualtrics.SurveyEngine.setEmbeddedData('MixerARP1', MixerARPs[0]);
Qualtrics.SurveyEngine.setEmbeddedData('MixerARP2', MixerARPs[1]);
Qualtrics.SurveyEngine.setEmbeddedData('MixerARP3', MixerARPs[2]);
Qualtrics.SurveyEngine.setEmbeddedData('MixerARP4', MixerARPs[3]);

Qualtrics.SurveyEngine.setEmbeddedData('LaptopARP1', LaptopARPs[0]);
Qualtrics.SurveyEngine.setEmbeddedData('LaptopARP2', LaptopARPs[1]);
Qualtrics.SurveyEngine.setEmbeddedData('LaptopARP3', LaptopARPs[2]);
Qualtrics.SurveyEngine.setEmbeddedData('LaptopARP4', LaptopARPs[3]);

Qualtrics.SurveyEngine.setEmbeddedData('CameraARP1', CameraARPs[0]);
Qualtrics.SurveyEngine.setEmbeddedData('CameraARP2', CameraARPs[1]);
Qualtrics.SurveyEngine.setEmbeddedData('CameraARP3', CameraARPs[2]);
Qualtrics.SurveyEngine.setEmbeddedData('CameraARP4', CameraARPs[3]);

Qualtrics.SurveyEngine.setEmbeddedData('JuiceARP1', JuiceARPs[0]);
Qualtrics.SurveyEngine.setEmbeddedData('JuiceARP2', JuiceARPs[1]);
Qualtrics.SurveyEngine.setEmbeddedData('JuiceARP3', JuiceARPs[2]);
Qualtrics.SurveyEngine.setEmbeddedData('JuiceARP4', JuiceARPs[3]);



