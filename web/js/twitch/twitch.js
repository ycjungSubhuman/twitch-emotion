const T = {
	init: function() {
		Twitch.init({clientId: 'a6he265cackgwqtc89gzqfivu5yn3n6'}, function(error, status) {
			if(error) console.log(error);
			if(status.authenticated) {
				$('#login').hide();
			}
                        else {
                                $('#twitch_wrapper').hide();
                                $('#metadata__wrapper').hide();
                                $('#login_request').show();
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

