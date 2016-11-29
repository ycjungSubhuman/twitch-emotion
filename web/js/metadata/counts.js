//control '#smiley'

var number = document.createElement("div");
number.setAttribute("id", "userCount");
number.innerHTML = dummy_data.viewers;

document.getElementById('counts').appendChild(number);