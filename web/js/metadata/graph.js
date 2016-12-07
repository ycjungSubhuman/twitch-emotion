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
    
    emotions_anger[historyCount] = {x: historyCount, y: 0};
    emotions_contempt[historyCount] = {x: historyCount, y: 0};
    emotions_disgust[historyCount] = {x: historyCount, y: 0};
    emotions_fear[historyCount] = {x: historyCount, y: 0};
    emotions_happiness[historyCount] = {x: historyCount, y: 0};
    emotions_sadness[historyCount] = {x: historyCount, y: 0};
    emotions_surprise[historyCount] = {x: historyCount, y: 0};
    
    historyCount++;
  }
  chart = new CanvasJS.Chart("graph",
  {

    //title:{
    //text: "Earthquakes - per month"
    //},
    axisY:{
      minimum: 0,
      maximum: 1,
    },
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
  
  emotions_anger.push({x: historyCount, y: ii.anger});
  emotions_contempt.push({x: historyCount, y: ii.contempt});
  emotions_disgust.push({x: historyCount, y: ii.disgust});
  emotions_fear.push({x: historyCount, y: ii.fear});
  emotions_happiness.push({x: historyCount, y: ii.happiness});
  emotions_sadness.push({x: historyCount, y: ii.sadness});
  emotions_surprise.push({x: historyCount, y: ii.surprise});
  
  historyCount++;
  
  if(chart != null) {
    chart.render();
    
    if (emotions_anger.length > historySize) {
      emotions_anger.shift();
      emotions_contempt.shift();
      emotions_disgust.shift();
      emotions_fear.shift();
      emotions_happiness.shift();
      emotions_sadness.shift();
      emotions_surprise.shift();
    }
  }
}
