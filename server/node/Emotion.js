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
		socket.emit('get_emotion', data);
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



function add(data)
{
	emotions.anger += data.anger;
	emotions.contempt += data.contempt;
	emotions.fear += data.fear;
	emotions.happiness += data.happiness;
	emotions.sadness += data.sadness;
	emotions.surprise += data.surprise;
	num++;	
	
	var temp = new Object();
	
	temp.anger = data.anger;
	temp.contempt = data.contempt;
	temp.fear = data.fear;
	temp.happiness = data.happiness;
	temp.sadness = data.sadness;
	temp.surprise = data.surprise;

	setTimeout(function(data){

	emotions.anger -= temp.anger;
	emotions.contempt -= temp.contempt;
	emotions.fear -= temp.fear;
	emotions.happiness -= temp.happiness;
	emotions.sadness -= temp.sadness;
	emotions.surprise -= temp.surprise;
	num--;	
	}, 300);
		
}


var c_time = 0;

var LOG = {};

setInterval(function() { c_time++;}, 300);


function addtoArray(data)
{
	LOG[c_time] = new Object(data);
}




