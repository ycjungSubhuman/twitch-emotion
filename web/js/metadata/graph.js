//control '#graph'

var historyCount = 0;
const historySize = 60;

var emotions_anger = new Array(historySize);
var emotions_contempt = new Array(historySize);
var emotions_disgust = new Array(historySize);
var emotions_fear = new Array(historySize);
var emotions_happiness = new Array(historySize);
var emotions_sadness = new Array(historySize);
var emotions_surprise = new Array(historySize);
var chart = null;

function graph_init() {
	while (historyCount < historySize) {
		
		emotions_anger[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_contempt[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_disgust[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_fear[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_happiness[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_sadness[historyCount % historySize] = {x: historyCount, y: 0};
		emotions_surprise[historyCount % historySize] = {x: historyCount, y: 0};
		
		historyCount++;
	}
	chart = new CanvasJS.Chart("graph",
	{

		//title:{
		//text: "Earthquakes - per month"
		//},
		data: [
		{type: "line", markerType: "none", lineThickness: "2", color: color_anger, dataPoints: emotions_anger},
		{type: "line", markerType: "none", lineThickness: "2", color: color_contempt, dataPoints: emotions_contempt},
		{type: "line", markerType: "none", lineThickness: "2", color: color_disgust, dataPoints: emotions_disgust},
		{type: "line", markerType: "none", lineThickness: "2", color: color_fear, dataPoints: emotions_fear},
		{type: "line", markerType: "none", lineThickness: "2", color: color_happiness, dataPoints: emotions_happiness},
		{type: "line", markerType: "none", lineThickness: "2", color: color_sadness, dataPoints: emotions_sadness},
		{type: "line", markerType: "none", lineThickness: "2", color: color_surprise, dataPoints: emotions_surprise},
		]
	});
}

function graph_step() {

	emotions_anger[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.anger};
	emotions_contempt[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.contempt};
	emotions_disgust[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.disgust};
	emotions_fear[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.fear};
	emotions_happiness[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.happiness};
	emotions_sadness[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.sadness};
	emotions_surprise[historyCount % historySize] = {x: historyCount, y: dummy_data.average_emotion.surprise};
	
	historyCount++;
	
	if(chart != null)
	chart.render();
}
