// html needs to be within question text <div class="vis" style = "width:600px"><canvas height="400px" id="selfChart" width="600px"></canvas></div>



Qualtrics.SurveyEngine.addOnload(function()
{

	
	/*Place your JavaScript here to run when the page loads*/
var selfCanvas = document.getElementById("selfChart");

Chart.defaults.global.defaultFontFamily = "Arial";
Chart.defaults.global.defaultFontSize = 14;

var selfData = {
  labels: ["Collaborate","Create","Compete","Control"],
  datasets: [{
    label: "Now",
    backgroundColor: "white",
    borderColor: "#00274C",
    fill: false,
    radius: 5,
    pointRadius: 5,
    pointBorderWidth: 3,
    pointBackgroundColor: "#00274C",
    pointBorderColor: "#00274C",
    pointHoverRadius: 10,
    data: ["${e://Field/collaborate1}","${e://Field/create1}","${e://Field/compete1}","${e://Field/control1}"]
  } ,{
    label: "Preferred",
    backgroundColor: "white",
    borderColor: "#FFCB05",
    fill: false,
    radius: 5,
    pointRadius: 5,
    pointBorderWidth: 3,
    pointBackgroundColor: "#FFCB05",
    pointBorderColor: "#FFCB05",
    pointHoverRadius: 10,
    data: ["${e://Field/collaborate2}","${e://Field/create2}","${e://Field/compete2}","${e://Field/control2}"]
  }]
};

var chartOptions = {
	startAngle: -45,
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 50,
      stepSize: 10
    },
    pointLabels: {
      fontSize: 14
    }
  },
  legend: {
    position: 'left'
  },
  tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
        }
      }
    }
};

var radarChart = new Chart(selfCanvas, {
  type: 'radar',
  data: selfData,
  options: chartOptions
});
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
	$('NextButton').hide(); 
	$('PreviousButton').hide();
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
