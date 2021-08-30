import Player from './Player';

export default class Game {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  private player: Player;

  private gameLoopID: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.type) {
      case 'keydown':
        this.player.move(event.key);
        break;
      case 'keyup':
        this.player.stopMove();
        break;
      default: break;
    }
  }

  start() {
    this.createPlayer();
    this.startIntervals();
  }

  startIntervals() {
    const { setInterval } = window;
    this.gameLoopID = setInterval(() => this.gameLoop(), 1000 / 120);
  }

  gameLoop() {
    this.clearScreen();
    this.player.draw();
  }

  createPlayer() {
    this.player = new Player(this.context, this.canvas.width / 2, this.canvas.height - 26, './assets/sprites/alien.png', this.canvas.width);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
