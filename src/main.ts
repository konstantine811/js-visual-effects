import "./style.scss";

const canvasEl = document.querySelector<HTMLCanvasElement>("canvas");
let ctx: CanvasRenderingContext2D;
if (canvasEl) {
  ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
  if (ctx) {
    onDraw();
    listenResize();
  }
}

function onDraw() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = "blue";
  ctx.fillRect(100, 100, 400, 400);
}

function listenResize() {
  window.addEventListener("resize", () => {
    onDraw();
  });
}
