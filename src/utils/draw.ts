export class Draw {
  private ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  onDraw() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(100, 100, 400, 400);

    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.ctx.rect(100, 100, 400, 400);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(300, 300, 100, 0, Math.PI * 2);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }
}
