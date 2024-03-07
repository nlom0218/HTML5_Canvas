class Box {
  constructor(posX, posY, width, height, index) {
    this.posX = posX;
    this.posY = posY;

    this.width = width;
    this.height = height;

    this.index = index;
  }

  draw(context) {
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillRect(this.posX, this.posY, this.width, this.height);

    context.fillStyle = '#fff';
    context.fillText(
      this.index,
      this.posX + this.width / 2,
      this.posY + this.height / 2
    );
  }

  handleClick(mousePos) {
    if (
      mousePos.x < this.posX ||
      mousePos.x > this.posX + this.width ||
      mousePos.y < this.posY ||
      mousePos.y > this.posY + this.height
    )
      return;

    context.fillStyle = 'red';
    context.fillText(
      this.index,
      this.posX + this.width / 2,
      this.posY + this.height / 2
    );
  }
}
