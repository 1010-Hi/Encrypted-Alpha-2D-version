document.onkeydown = function(e) {
    if (e.ctrlKey &&
      (e.keyCode === 65 ||
        e.keyCode === 67 ||
        e.keyCode === 70 ||
        e.keyCode === 73 ||
        e.keyCode === 86 ||
        e.keyCode === 85 ||
        e.keyCode === 93 ||
        e.keyCode === 117)) {
      return false;
    } else {
      return true;
    }
  };

run()

  function run(){
  var total = "0"
  for (var i = 0; i <4; i++) {
    total = total + i.toString()
    history.pushState(0, 0, total);
  }
}