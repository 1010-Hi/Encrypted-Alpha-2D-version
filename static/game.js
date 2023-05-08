// cache our canvas and context to draw
var canvas;
var ctx;

// cache inputs
var keys = [];

window.onkeydown = function(e) {
  keys[e.key] = true;
};

window.onkeyup = function(e) {
  keys[e.key] = false;
};

var player = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  speed: 2,
  handleInput: function() {

    if (keys["ArrowUp"]) {
      this.y -= this.speed;
    }

    if (keys["ArrowDown"]) {
      this.y += this.speed;
    }

    if (keys["ArrowLeft"]) {
      this.x -= this.speed;
    }

    if (keys["ArrowRight"]) {
      this.x += this.speed;
    }
  },

  draw: function() {

    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

var wall = {
  x: 0,
  y: 0,
  width: 2,
  height: 1,
  draw: function() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

// initialize our variables and start our game loop
function startGame() {
  canvas = document.getElementById("gc");
  ctx = canvas.getContext("2d");

  var fps = 30 / 1000;
  window.setInterval(update, fps);
}

// game loop
function update() {
  handleLogic();

  draw();
}

// handle inputs, handle player, handle enemies, etc
function handleLogic() {
  player.handleInput();

  if (checkCollisions(player, wall)) {
    location.href = "/Button"
  }
}

// draw our game to the canvas
function draw() {
  // clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw player 
  player.draw();

  // draw wall
  wall.draw();
}



function checkCollisions(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y) {
    return true;
  }
  else {
    return false
  }
}