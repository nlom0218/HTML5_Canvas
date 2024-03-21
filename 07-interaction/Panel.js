class Panel {
  constructor() {
    this.calculateScale = 0;
  }

  draw() {
    context.fillStyle = 'rgba(255, 0, 0, 0.7)';

    context.resetTransform();
    context.translate(300, 200);
    context.scale(this.calculateScale, this.calculateScale);
    context.translate(-300, -200);
    context.fillRect(150, 50, 300, 300);
    context.resetTransform();
  }

  showContent() {
    context.fillStyle = '#fff';
    context.fillText(selectedBox, 300, 200);
  }
}
