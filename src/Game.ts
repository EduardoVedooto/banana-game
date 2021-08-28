import Player from './Player';

export default class Game {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  player: Player;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  }

  onKeyDown(key: string) {
    if (key === 'ArrowLeft') {
      this.player.move(-1);
    } else if (key === 'ArrowRight') {
      this.player.move(1);
    }
  }

  start() {
    this.createPlayer();
  }

  createPlayer() {
    this.player = new Player(this.context, 0, 10);
    this.player.draw();
  }
}
