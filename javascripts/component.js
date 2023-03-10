class Component {

  constructor(options) {
    this.ctx = options.canvasContext;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.x = options.posX;
    this.y = options.posY;
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }

}

export default Component;
