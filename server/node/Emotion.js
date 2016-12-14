var app = require('http').createServer(handler)
, io = require('socket.io').listen(app)
, fs = require('fs')

app.listen(8888);

function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
			function (err, data) {
			if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
			}

			res.writeHead(200);
			res.end(data);
			});
}

var emotions = new Object();

emotions.anger = 0;
emotions.contempt = 0;
emotions.fear = 0;
emotions.disgust = 0;
emotions.happiness = 0;
emotions.sadness = 0;
emotions.surprise = 0;

var num = 0;

io.sockets.on('connection', function (socket) {
	

	socket.emit('news', { hello: 'world' });


	socket.on('my other event', function (data) {
		
		console.log('wow');
		console.log(data);
		add(data);
		addtoArray(data);
	});

	socket.on('get_current_emotion', function() {
		socket.emit('get_emotion', emotions);
	});

	socket.on('show', function(){

		for(i in LOG)
		{
			console.log(i + " === " );
			console.log(LOG[i]);
		}
		console.log("\nnum : " + num);
		if(num != 0)
		{
		
			for(i in emotions)
			{
				console.log(i + " : " + emotions[i]/num);
			}
			console.log("=================");
		}
	});

	socket.on('current', function(){

		console.log("\nnum : " + num);
		if(num != 0)
		{
		
			for(i in emotions)
			{
				console.log(i + " : " + emotions[i]/num);
			}
			console.log("=================");
		}
	});

});


var past = new Object();
var SIZE = 3;

function add(data)
{
	past.anger = emotions.anger;
	past.contempt = emotions.contempt;
	past.fear = emotions.fear;
	past.happiness = emotions.happiness;
	past.sadness = emotions.sadness;
	past.disgust = emotions.disgust;
	past.surprise = emotions.surprise;

	num++;	
	var tail = getMostPastData();
	emotions.anger = past.anger + data.anger/SIZE - tail.anger/SIZE;
	emotions.contempt = past.contempt + data.contempt/SIZE - tail.contempt/SIZE;
	emotions.fear = past.fear + data.fear/SIZE - tail.fear/SIZE;
	emotions.happiness = past.happiness + data.happiness/SIZE - tail.happiness/SIZE;
	emotions.sadness = past.sadness + data.sadness/SIZE - tail.sadness/SIZE;
	emotions.disgust = past.disgust + data.disgust/SIZE - tail.disgust/SIZE;
	emotions.surprise = past.surprise + data.surprise/SIZE - tail.surprise/SIZE;
}


var c_time = 0;

var LOG = {};

setInterval(function() { c_time++;}, 300);

function getMostPastData() {
	if(LOG[num - SIZE]) return LOG[num - SIZE];
	else return {
		anger: 0,
		contempt:0,
		fear: 0,
		happiness: 0,
		sadness: 0,
		disgust: 0,
		surprise: 0
	};
}


function addtoArray(data)
{
	LOG[num] = new Object(data);
}




