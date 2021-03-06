
//Suppose you have emotion data.

const color_anger = "#FC3636"; // Red
const color_contempt = "#6441A4"; // Purple
const color_disgust = "#BFBF3F"; // Dark yellow
const color_fear = "#17141F"; // Dark purple
const color_happiness = "#14B866"; // Green
const color_sadness = "#0E9DD9"; // Blue
const color_surprise = "#EF9F0F"; // Orange

var noise = 0.05;

ii = {
        anger: 0.10,
        contempt: 0.20,
        disgust: 0.30,
        fear: 0.01,
        happiness: 0.20,
        sadness: 0.01,
        surprise: 0.01,
}
var viewer_count = 0;

function get_dominating_value() {
  var maxValue = Math.max(
    ii.anger, 
    ii.contempt, 
    ii.disgust, 
    ii.fear, 
    ii.happiness, 
    ii.sadness, 
    ii.surprise);
  return maxValue;
}

function get_dominating_emotion() {
  maxValue = get_dominating_value();
  
  for (var emotion in ii) {
    if (maxValue == ii[emotion]) {
      if (maxValue != 0)
        return emotion;
      else return undefined;
    }
  }
}

var socket = io.connect('itrustgreen.ze.am:8888');
function updateEmotion(emotion) {
	console.log(emotion);
	socket.emit('my other event', emotion);
}

function init_fetch() {
	setInterval(function() {
		socket.emit('get_current_emotion');
	}, 1000);
	socket.on('get_emotion', function (data) {
		ii = data;
		console.log('ss');
		console.log(ii);
		ui_step();
	});                 

}



function get_emotion_data() {
  return ii;
}

