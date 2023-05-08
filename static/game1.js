// cache our canvas and context to draw
var canvas;
var ctx;

// cache inputs
var keys = [];

window.onkeydown = function (e)
{
    keys[e.key] = true;
};

window.onkeyup = function (e)
{
    keys[e.key] = false;
};

var player = new Player(500, 0);
var player2 = new Player(500, 70);
var badGuy = new BadGuy(1, 0, 1);
var badGuy2 = new BadGuy(71, 0, 1);
var badGuy3 = new BadGuy(142, 0, 1);
var badGuy4 = new BadGuy(216, 0, 1);
var badGuy5= new BadGuy(288, 0, 1);
var badGuy6 = new BadGuy(360, 0, 1);
var badGuy7= new BadGuy(432, 0, 1);
var badGuy8= new BadGuy(502, 0, 1);
var badGuys = []

badGuys.push(badGuy2)
badGuys.push(badGuy3)
badGuys.push(badGuy4)
badGuys.push(badGuy5)
badGuys.push(badGuy6)
badGuys.push(badGuy7)
badGuys.push(badGuy8)

// for (var i = 0; i <7; ++i)
// {

//     badGuys.push(new BadGuy(i * 70, 0, 1));
// }
// wall
var wall = {
    x: 560,
    y: 221,
    width: 40,
    height: 40,
    draw: function () {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,  this.y, this.width, this.height);
    }
};


// initialize our variables and start our game loop
function startGame()
{

   

    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");

    var fps = 30 / 1000;
    window.setInterval(update, fps);
}

// game loop
function update()
{



    handleLogic();

    draw();

    
}


// handle inputs, handle player, handle enemies, etc
function handleLogic()
{
    player.handleInput();
    player2.handleInput();
    badGuy.move();

    if (checkCollisions(player, wall))
  { 
    location.href="/No"
  }

  if (checkCollisions(player2, wall))
  { 
      player.x = 500;
       player.y = 500; 
   //   player2.x = 420; 
     // player2.y = 500; 
  }

  for (var i = 0; i < badGuys.length; i++)
  {
      
      
      if (checkCollisions(player, badGuys[i]))
      {
        player.x = 500;
        player.y = 0; 
        //player2.x = 420;
        //player2.y = 500;       
      }

      if (checkCollisions(player2, badGuys[i]))
     {
        player.x = 0;
        player.y = 0; 
       // player2.x = 420;
        //player2.y = 500; 
      }
  }


  if (checkCollisions(player, badGuy))
  { 
    player.x = -10; 
    player.y = 0; 
    //player2.x = player2.y = 500; 
  }

 
badGuys.forEach(function (badGuy) {

    badGuy.move();   
    });
}




// draw our game to the canvas
function draw()
{
    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw player 
    player.draw();   
    
    // draw badguy
    badGuy.draw();

    badGuys.forEach(function (badGuy) {    
        badGuy.draw();   
        });

    // draw wall
   
}

function checkCollisions(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
            
        return true;
    }
    else{
      
        return false
    }   
}



//if(x < 0){
  //  x = 0;
 // }
//if(x > 550){
//x = 550;
// }
// if(y < 0){
 // y = 0;
// }
//  if(y > 550){
 //  y = 550;
// }  