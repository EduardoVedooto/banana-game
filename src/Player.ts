export default class Player {
  private context: CanvasRenderingContext2D;

  private posX: number;

  private posY: number;

  private sprite: HTMLImageElement;

  private speed: number;

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    spriteSrc: string,
    canvasWidth: number,
  ) {
    this.context = context;
    this.posX = x;
    this.posY = y;
    this.sprite = new Image();
    this.sprite.src = spriteSrc;
    this.speed = canvasWidth / (canvasWidth - 225);
  }

  move(direction: string) {
    switch (direction) {
      case 'ArrowLeft':
        this.posX -= this.speed;
        break;
      case 'ArrowRight':
        this.posX += this.speed;
        break;
      default: break;
    }
  }

  stopMove() { console.log(this.posX); }

  move2(x: number) {
    this.posX = x;
  }

  draw() {
    this.context.drawImage(
      this.sprite,
      this.posX,
      this.posY,
      this.sprite.width / 10,
      this.sprite.height / 14,
    );
  }
}
