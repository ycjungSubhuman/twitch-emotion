const Cam = {
	init: function() {
		Webcam.attach('#camera');	
		$('#snapshot').click(function() {
			Webcam.snap(function(data_uri) {
				var img = document.createElement('img');
				img.setAttribute("src", data_uri);
				document.querySelector('#test_capture').appendChild(img);
			});
		});
	}
}