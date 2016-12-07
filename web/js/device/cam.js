const Cam = {
  init: function() {
    Webcam.attach('#camera'); 
    $("#snapshot").click(function() { setInterval(on_cam, 4000); $("#snapshot").hide(); });
  }
}

function on_cam() {
      Webcam.snap(function(data_uri) {
        var img = document.createElement('img');
        img.setAttribute("src", data_uri);
        document.querySelector('#test_capture').appendChild(img);

        var data = dataURItoBlob(data_uri);
        var a = $.ajax({
          type: 'POST',
          processData: false,
          beforeSend: function(xhr) {
            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
            xhr.setRequestHeader('Ocp-Apim-Subscription-Key', '39d48e5981694d35aba599b8a653c5f6');
          },
          url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
          data: data,
          success: function(result) {
            console.log(result);
            updateEmotion(result[0].scores);
          }
        });
      });

}

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
