window.onload = function() {
  T.init();
  Cam.init();
  graph_init();
  smiley_init();
  init_fetch();
  $('#channel').keydown(function(e) {
    if(e.keyCode==13) {
      T.get($('#channel').val());
    }
  });
};
