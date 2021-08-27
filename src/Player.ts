export default class Player {
  private context: CanvasRenderingContext2D;
  private posX: number;
  private posY: number;
  
  constructor(context: CanvasRenderingContext2D, x: number, y: number) {
    this.context = context;
    this.posX = x;
    this.posY = y;
  }

  move(x: number) {
    this.posX = x;
  }

  draw() {
    const img = new Image();
    img.src = '../public/assets/sprites/alien.png';
    img.onload = () => {
      this.context.drawImage(img, this.posX, this.posY, 200,100);
    }
  }
}