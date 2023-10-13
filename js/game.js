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

        this.obstacles = []

        this.start()
    },

    start: function () {

		let frameCounter = 0

        this.intervalId = setInterval(() => {
			frameCounter++
            this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

            	// Se genera obstáculo cada x frames
			if (frameCounter % 75 === 0) {
				this.generateObstacle()
			}
			
            this.background.draw();
			this.player.draw(frameCounter);
			this.player.move();

            this.obstacles.forEach((obstacle) => {
				obstacle.draw()
				obstacle.move()
			})

            if (this.isCollision()) {
				this.gameOver()
			}

        }, 1000 / this.fps);
    },

    gameOver: function () {
		// para el intervalo que implementa el loop de animación
		clearInterval(this.intervalId)

		if (confirm('GAME OVER! ¿Volver a jugar?')) {
			this.reset()
		}
	},

    generateObstacle: function () {
		this.obstacles.push(
			new Obstacle(this.ctx, this.canvasW, this.player.y, this.player.h)
            
		)
        console.log("OBSTACULO")
	},

    isCollision: function () {
		let collision = false

		this.obstacles.forEach((obstacle) => {
			// Algoritmo de colisión por los 4 lados
			if (
				obstacle.x < this.player.x + this.player.w &&
				obstacle.x + obstacle.w > this.player.x &&
				obstacle.y + obstacle.h > this.player.y &&
				obstacle.y < this.player.y + this.player.h
			) {
				collision = true
			}
		})

		return collision
	},

};
