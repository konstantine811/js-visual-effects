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

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.rect(100, 100, 400, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 300, 100, 0, Math.PI * 2);
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function listenResize() {
  window.addEventListener("resize", () => {
    onDraw();
  });
}
