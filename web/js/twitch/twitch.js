const T = {
	init: function() {
		Twitch.init({clientId: 'a6he265cackgwqtc89gzqfivu5yn3n6'}, function(error, status) {
			if(error) console.log(error);
		});

		Twitch.getStatus(function(error, status) {
			if(!status.authenticated) {
				console.log(status.authenticated);
				_request_auth();
			}
		});
	},
};

function _request_auth() {
	Twitch.login({
		scope: ['user_read', 'channel_read'],
	});
}
