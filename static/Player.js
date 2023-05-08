function Player(x, y)
{
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 25;
    this.speed= 1;
}

Player.prototype.handleInput = function ()
{
  {
    if (keys["ArrowUp"])
    {
        this.y -= this.speed;
    }
    
    if (keys["ArrowDown"])
    {
        this.y += this.speed;
    }

    if (keys["ArrowLeft"])
    {
        this.x -=  this.speed;
    }
    
    if (keys["ArrowRight"])
    {
        this.x +=  this.speed;
    }
    };

}

Player.prototype.draw = function () {
 
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x,  this.y, this.width, this.height);

}  