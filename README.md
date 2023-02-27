# Second Lesson - Loop drawing

```javascript
drawArray() {
    this.ctx.lineWidth = 2;
    const width = 60;
    const height = 60;
    const gap = 20;
    // draw array rectangle by for looping
    // where first we drawing 5 columns
    for (let i = 0; i < 5; i++) {
        // and then we inner for looping
        // and create 5 row
      for (let j = 0; j < 5; j++) {
        // translate next rect by multiple
        // and plus to gap
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();

        // draw inner randomly
        if (Math.random() > 0.5) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = "red";
          this.ctx.rect(x + 8, y + 8, width - 16, height - 16);
          this.ctx.stroke();
        }
      }
    }
  }
```
