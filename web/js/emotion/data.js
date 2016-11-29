
//Suppose you have emotion data.
var dummy_data = {
    viewers: 10,
    average_emotion: {
        anger: 0.01,
        contempt: 0.01,
        disgust: 0.01,
        fear: 0.01,
        happiness: 0.50,
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
    dummy_data.average_emotion.anger += 0.01;
    dummy_data.average_emotion.contempt -= 0.0001;
    dummy_data.average_emotion.disgust += 0.0001;
    dummy_data.average_emotion.fear -= 0.0001;
    dummy_data.average_emotion.happiness -= 0.01;
    dummy_data.average_emotion.sadness += 0.0001;
    dummy_data.average_emotion.surprise -= 0.0001;
}


