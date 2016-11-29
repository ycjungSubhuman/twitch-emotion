// control '#smiley'
var img = document.createElement("img");

function smiley_init() {
	img.setAttribute("src", "img/smiley_" + get_dominating_emotion() + ".png");
	emotionIntensity = get_dominating_value();

	var div = document.querySelector("#smiley");
	div.appendChild(img);
	
	step();
}

function step() {
	img.setAttribute("src", "img/smiley_" + get_dominating_emotion() + ".png");
	emotionIntensity = get_dominating_value();
	
	dummy_update_data();
	
	var data = get_emotion_data();
	img.style.transform = "scale(" + (emotionIntensity + 1) / 2 + ", " + (emotionIntensity + 1) / 2 + ")";
	
	// Update user count
	var number = document.getElementById('userCount');
	number.innerHTML = dummy_data.viewers;
	
	// Update graph
	graph_step();
	
	window.requestAnimationFrame(step);
}
