
//Suppose you have emotion data.
var dummy_data = {
    viewers: 10,
    average_emotion: {
        anger: 0.10,
        contempt: 0.20,
        disgust: 0.30,
        fear: 0.01,
        happiness: 0.20,
        sadness: 0.01,
        surprise: 0.01,
    },
}

function get_emotion_data() {
    return dummy_data;
}

//use it for making dynamic graphs
function dummy_update_data() {
    dummy_data.viewers += 1;
    dummy_data.average_emotion.anger += 0.1;
    dummy_data.average_emotion.contempt -= 0.1;
    dummy_data.average_emotion.disgust += 0.1;
    dummy_data.average_emotion.fear -= 0.1;
    dummy_data.average_emotion.happiness += 0.1;
    dummy_data.average_emotion.sadness += 0.1;
    dummy_data.average_emotion.surprise -= 0.1;
}


