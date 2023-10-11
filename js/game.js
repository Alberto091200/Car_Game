const Game = {
    ctx: undefined,
    canvasW: undefined,
    canvasH: undefined,
    fps: 60,
    keys: {
        RIGHT: 'KeyD',
        LEFT: 'KeyA',
    },

    init: function () {
        console.log('Test');
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');

        this.canvasW = canvas.width;
        this.canvasH = canvas.height;

        this.reset()
    },

    reset: function () {
        console.log('Reset');
        this.background = new Background(this.ctx, this.canvasW, this.canvasH);
        this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys);

        this.start()
    },

    start: function () {

		let frameCounter = 0

        this.intervalId = setInterval(() => {
			frameCounter++
            this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
			
            this.background.draw();
			this.player.draw(frameCounter);
            console.log(this.player)
			this.player.move();

        }, 1000 / this.fps);
    }
};
