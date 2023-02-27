import { Draw } from "./draw";

export class InitDrawing {
  private _ctx!: CanvasRenderingContext2D;
  private _draw!: Draw;
  constructor(classNameCanvas: string) {
    const canvasEl = document.querySelector<HTMLCanvasElement>(classNameCanvas);
    if (canvasEl) {
      this._ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
      this._draw = new Draw(this._ctx);
      this._draw.onDraw();
      this.listenResize();
    }
  }

  private listenResize() {
    window.addEventListener("resize", this.onResize);
  }

  private onResize = () => {
    this._draw.onDraw();
  };

  onDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
}
