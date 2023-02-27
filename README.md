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
}

function listenResize() {
  window.addEventListener("resize", () => {
    onDraw();
  });
}
```
