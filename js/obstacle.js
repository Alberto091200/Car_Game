class Obstacle {
    constructor(ctx, canvasW, playerY, playerH) {
        this.ctx = ctx;
        this.canvasW = canvasW;
        this.y = -100;
        this.x = Math.random() * (canvasW - 95);
        this.w = 100;
        this.h = 110;

        this.dy = 2;

        this.img = new Image();
        this.img.src = 'assets/car.png';
        this.img.frameIndex = 0;
        this.img.frames = 1;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * (this.img.width / this.img.frames), // sx
            0,
            this.img.width / this.img.frames,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

    move() {
        this.y += this.dy;
    }
}
