//control '#smiley'

var number = document.createElement("div");
number.setAttribute("id", "userCount");
number.innerHTML = viewer_count;

document.getElementById('counts').appendChild(number);