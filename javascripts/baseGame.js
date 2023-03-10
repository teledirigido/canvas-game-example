class BaseGame {

  constructor(options) {
    this.canvas = document.createElement('canvas');
    this.options = options;
    this.score = 0;
    this.myObstacles = [];
    this.frames = 0;
  }

  /**
   * @function buildCanvas
   * Build the canvas
   *
  **/
  buildCanvas() {
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }

  /**
   * @function start
   * Initiate the game by building the canvas, binding the keyboard
   * and setting an interval time where the game area is updated
   *
  **/
  start() {
    this.buildCanvas();
    this.bindKeyboard();
    this.interval = setInterval( () => {
      this.updateGameArea();
    }, 20);
  }

  /**
   * @function stop
   * Stops the game
  **/
  stop() {
    clearInterval(this.interval);
    if ( this.canRestart() ){
      this.restart();
    }
  }

  /**
   * @function canRestart
   * Check whether the game can be restarted by checking the player lives;
  &*/
  canRestart() {
    return this.player.lives;
  }

  /**
   *  @function restart
   * Starts the game over
  **/
  restart() {
    this.frames = 0;
    this.myObstacles = [];
    this.score = 0;
    this.player.x = 0;
    this.player.y = 110;
    this.start();
  }

  /**
   * @function clear
   * Empty the canvas and sets a new one
   *
  **/
  clear() {
    this.context = this.canvas.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @function updateGameArea
   * Creates a new frame with a new canvas and invoke the player and obstacle functions
   * checks if the player touches the obstacles
   *
  **/
  updateGameArea() {
    this.frames += 1;
    this.clear();
    this.handlePlayer();
    this.handleObstacles();
    this.checkGameOver();
    this.handleScore();
  }

  /**
   * @function handlePlayer
   * Creates a new position for the player and updates his position on the canvas
   *
  **/
  handlePlayer() {
    this.player.newPos();
    this.player.update();
  }

  checkGameOver() {
    const crashed = this.myObstacles.some( (obstacle) => {
      return this.player.crashWith(obstacle);
    });
    if (crashed) {
      this.player.lives -= 1;
      this.stop();
    }
  }

  /**
   * @function bindKeyboard
   * Bind keys for player handling
   *
  **/
  bindKeyboard() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 38: // up arrow
          this.player.speedY -= 1;
          break;
        case 40: // down arrow
          this.player.speedY += 1;
          break;
        case 37: // left arrow
            this.player.speedX -= 1;
          break;
        case 39: // right arrow
          this.player.speedX += 1;
          break;
        }
    });

    document.addEventListener('keyup', (e) => {
      this.player.speedX = 0;
      this.player.speedY = 0;
    });

  }

}

export default BaseGame;
