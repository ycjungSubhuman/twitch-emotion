const T = {
	init: function() {
		Twitch.init({clientId: 'a6he265cackgwqtc89gzqfivu5yn3n6'}, function(error, status) {
			if(error) console.log(error);
			if(status.authenticated) {
				$('#login').hide();
				get_video("subhuman22");
			}
		});
		$('#login').click(function() {
			_request_auth();
		});
	},
};

function _request_auth() {
	Twitch.login({
		scope: ['user_read', 'channel_read'],
	});
}

function get_video(channel) {
	var options = {
		width: 854,
		height: 480,
		channel: channel,
	};
	var player = new Twitch.Player("video", options);
	player.setVolume(0.5);
}
