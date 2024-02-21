class Circle extends Transform{
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green"
    ctx.strokeStyle = "purple"
    ctx.lineWidth = 5
    ctx.arc(50 + this.parent.transform.x, 50 + this.parent.transform.y, 50, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}