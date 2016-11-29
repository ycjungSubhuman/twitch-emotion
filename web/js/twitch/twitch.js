const T = {
	init: function() {
		Twitch.init({clientId: 'a6he265cackgwqtc89gzqfivu5yn3n6'}, function(error, status) {
			if(error) console.log(error);
			if(status.authenticated) {
                                $('#twitch_wrapper').show();
                                $('#metadata_wrapper').show();
                                $('#login_request').hide();
				$('#login').hide();
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

