class Box {
  constructor(posX, posY, width, height, index, speed) {
    this.posX = posX;
    this.posY = posY;

    this.width = width;
    this.height = height;

    this.index = index;
    this.speed = speed;

    this.textColor = '#fff';
  }

  draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    context.fillRect(this.posX, this.posY, this.width, this.height);

    context.fillStyle = this.textColor;
    context.fillText(
      this.index,
      this.posX + this.width / 2,
      this.posY + this.height / 2
    );
  }

  reset() {
    this.textColor = '#fff';
  }

  handleClick(mousePos, callback) {
    if (
      mousePos.x < this.posX ||
      mousePos.x > this.posX + this.width ||
      mousePos.y < this.posY ||
      mousePos.y > this.posY + this.height
    )
      return;

    this.textColor = 'red';
    callback(this.index);
  }
}
