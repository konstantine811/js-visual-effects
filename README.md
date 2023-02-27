# First Lesson - create Canvas and create first shape

```javascript
// First we get canvas element by this method
const canvasEl = document.querySelector<HTMLCanvasElement>("canvas");
let ctx: CanvasRenderingContext2D;
if (canvasEl) {
    // Then we get 2d drawing context
  ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
  if (ctx) {
    // Then we fire draw method
    onDraw();
    // and redraw on resize window screen
    listenResize();
  }
}

function onDraw() {
    // set size for canvas elemen
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  // fill context
  ctx.fillStyle = "blue";
  // and create rect with x, y, width, and height parameters
  ctx.fillRect(100, 100, 400, 400);

  // beginPath - method of the 2d Canvas API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.rect(100, 100, 400, 400);
  // draw stroke rect
  ctx.stroke();

  // draw circle
  ctx.beginPath();
  // first paramster is x center
  // second paramster is y center
  // third is radius
  // fourth is start angle drawing
  // second is end angle drawing in radian
  ctx.arc(300, 300, 100, 0, Math.PI * 2);
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function listenResize() {
  window.addEventListener("resize", () => {
    onDraw();
  });
}
```
