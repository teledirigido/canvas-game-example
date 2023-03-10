import Component from './component';
import Player from './player';
import BaseGame from './baseGame';

class myGame extends BaseGame {

  constructor(options) {
    super(options);
    this.player = new Player({
      width: 30,
      height: 30,
      color: 'red',
      posX: 0,
      posY: 110,
      canvasContext: this.canvas.getContext('2d'),
      lives: this.options.lives || 3
    });
  }

  /**
   * @function start
   * Initiate the game by building the canvas, binding the keyboard
   * and setting an interval time where the game area is updated
   *
  **/
  start() {
    super.start();
  }

  /**
   * @function updateObstacles
   * @see this.updateGameArea()
   * This function is handle the obstacles and is invoked on updateGameArea which is a function
   * that repeats under a setInterval
  **/
  handleObstacles() {

    for (let i = 0 ; i < this.myObstacles.length ; i++) {
      this.myObstacles[i].x += -1;
      this.myObstacles[i].update();
    }

    if (this.frames % 120 === 0) {
      let x = this.canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      this.myObstacles.push(new Component({
        width: 10,
        height: height,
        color: 'green',
        posX: x,
        posY: 0,
        canvasContext: this.canvas.getContext('2d')
      }));
      this.myObstacles.push(new Component({
        width: 10,
        height: x - height - gap,
        color: 'green',
        posX: x,
        posY: height + gap,
        canvasContext: this.canvas.getContext('2d')
      }));
    }
  }

  handleScore () {
    this.score = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${this.score}`, (this.options.width - 100), 50);
    this.context.fillText(`Lives: ${this.player.lives}`, (this.options.width - 100), 75);
  }

};

export default myGame;
