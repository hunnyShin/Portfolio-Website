console.log("This is Julie. Nice to meet you!")
var input = $("input");
var containers = $(".container");
function menuToggle() {
  var x = document.getElementById ('myNavtoggle');
  x.className += ' responsive'
}
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
