class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys

		this.img = new Image()
		this.img.src = 'assets/ambulance.png'

		this.img.frameIndex = 0
		this.img.frames = 3

		this.x = canvasW * 0.08
		this.y = canvasH * 0.8

		this.vx = 1

		this.w = 100
		this.h = 115

		this.actions = {
			RIGHT: false,
			LEFT: false,

		}

		this.setControls()
	}

	setControls() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
                    this.actions.RIGHT = true
				    console.log('Derecha')
				break

                case this.keys.LEFT:
                    this.actions.LEFT = true
                    console.log('Izquierda')
                break
			}
		})

		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case this.keys.RIGHT:
					this.actions.RIGHT = false
				break

                case this.keys.LEFT:
                    this.actions.LEFT = false
                break
			}
		})
	}


    draw(frameCounter) {
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
		)

        this.animateSprite(frameCounter)
	}

	animateSprite(frameCounter) {
		if (this.frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}
	
	move() {
		if (this.actions.RIGHT) {
			this.x += this.vx
		}
        if (this.actions.LEFT) {
			this.x -= this.vx
		}
	}

}