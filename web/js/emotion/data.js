
//Suppose you have emotion data.

const color_anger = "#FC3636"; // Red
const color_contempt = "#6441A4"; // Purple
const color_disgust = "#BFBF3F"; // Dark yellow
const color_fear = "#17141F"; // Dark purple
const color_happiness = "#14B866"; // Green
const color_sadness = "#0E9DD9"; // Blue
const color_surprise = "#EF9F0F"; // Orange

var noise = 0.1;

var dummy_data = {
    viewers: 10,
    average_emotion: {
        anger: 0.1,
        contempt: 0.01,
        disgust: 0.01,
        fear: 0.01,
        happiness: 0.80,
        sadness: 0.01,
        surprise: 0.01,
    },
}

function get_emotion_data() {
    return dummy_data;
}

function get_dominating_value() {
	var maxValue = Math.max(
		dummy_data.average_emotion.anger, 
		dummy_data.average_emotion.contempt, 
		dummy_data.average_emotion.disgust, 
		dummy_data.average_emotion.fear, 
		dummy_data.average_emotion.happiness, 
		dummy_data.average_emotion.sadness, 
		dummy_data.average_emotion.surprise);
	return maxValue;
}

function get_dominating_emotion() {
	maxValue = get_dominating_value();
	
	for (var emotion in dummy_data.average_emotion) {
		if (maxValue == dummy_data.average_emotion[emotion]) {
			return emotion;
		}
	}
}

//use it for making dynamic graphs
function dummy_update_data() {
    dummy_data.viewers += 1;
	
    dummy_data.average_emotion.anger += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.contempt += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.disgust += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.fear += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.happiness += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.sadness += Math.random()*noise-noise*0.5;
    dummy_data.average_emotion.surprise += Math.random()*noise-noise*0.5;
	
	if (dummy_data.average_emotion.anger < 0) {
		dummy_data.average_emotion.anger += noise * 2
	} else if (dummy_data.average_emotion.anger >= 1) {
		dummy_data.average_emotion.anger -= noise*2
	}
	if (dummy_data.average_emotion.contempt < 0) {
		dummy_data.average_emotion.contempt += noise * 2
	} else if (dummy_data.average_emotion.contempt >= 1) {
		dummy_data.average_emotion.contempt -= noise*2
	}
	if (dummy_data.average_emotion.disgust < 0) {
		dummy_data.average_emotion.disgust += noise * 2
	} else if (dummy_data.average_emotion.disgust >= 1) {
		dummy_data.average_emotion.disgust -= noise*2
	}
	if (dummy_data.average_emotion.fear < 0) {
		dummy_data.average_emotion.fear += noise * 2
	} else if (dummy_data.average_emotion.fear >= 1) {
		dummy_data.average_emotion.fear -= noise*2
	}
	if (dummy_data.average_emotion.happiness < 0) {
		dummy_data.average_emotion.happiness += noise * 2
	} else if (dummy_data.average_emotion.happiness >= 1) {
		dummy_data.average_emotion.happiness -= noise*2
	}
	if (dummy_data.average_emotion.sadness < 0) {
		dummy_data.average_emotion.sadness += noise * 2
	} else if (dummy_data.average_emotion.sadness >= 1) {
		dummy_data.average_emotion.sadness -= noise*2
	}
	if (dummy_data.average_emotion.surprise < 0) {
		dummy_data.average_emotion.surprise += noise * 2
	} else if (dummy_data.average_emotion.surprise >= 1) {
		dummy_data.average_emotion.surprise -= noise*2
	}
	
}


