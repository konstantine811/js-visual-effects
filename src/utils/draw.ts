export class Draw {
  private ctx: CanvasRenderingContext2D;
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  onDraw() {
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
    // draw arrays rect
    this.drawArray();
  }

  drawArray() {
    this.ctx.lineWidth = 2;
    const width = 60;
    const height = 60;
    const gap = 20;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();

        if (Math.random() > 0.5) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = "red";
          this.ctx.rect(x + 8, y + 8, width - 16, height - 16);
          this.ctx.stroke();
        }
      }
    }
  }
}
