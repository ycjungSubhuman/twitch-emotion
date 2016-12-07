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
  get: function(username) {
    $('#video')
      .empty()
      .append(get_twitch_video_iframe(username));
    $('#chat')
      .empty()
      .append(get_twitch_chat_iframe(username));
  },
};

function _request_auth() {
  Twitch.login({
    scope: ['user_read', 'channel_read'],
  });
}

function get_twitch_video_iframe(channel) {
  return $("<iframe>")
    .attr("src", "http://player.twitch.tv/?channel=" + channel)
    .attr("class", "video-iframe")
    .attr("frameborder", 0)
    .attr("scrolling", "no")
    .attr("allowfullscreen", "true");
}

function get_twitch_chat_iframe(channel) {
  return $("<iframe>")
    .attr("src", "http://www.twitch.tv/" + channel + "/chat")
    .attr("id", "chat_embed")
    .attr("scrolling", "no")
    .attr("class", "chat-iframe")
    .attr("frameborder", "0");
}
