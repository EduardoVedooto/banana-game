import Game from './Game';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.focus();

const game = new Game(canvas);

game.start();

canvas.addEventListener('keydown', (event) => {
  game.onKeyDown(event);
});
