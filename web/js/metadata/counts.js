//control '#smiley'

var number = document.createElement("span");
number.setAttribute("id", "userCount");
number.innerHTML = viewer_count;

document.getElementById('counts').appendChild(number);
