import Component from './component';

class Player extends Component {
  constructor(options) {
    super(options);
    this.lives = options.lives;
  }
}

export default Player;
