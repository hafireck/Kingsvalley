(function(window) {
	
	"use strict";

	function Animation(name, framecount, fps, frameWidth, frameHeight, offsetX, offsetY) {
		this.name = name;
		this.framecount = framecount;
		this.timePerFrame = 1 / fps;
		this.frameWidth = frameWidth;
		this.frameHeight = frameHeight;
		this.offsetX = offsetX || 0;
		this.offsetY = offsetY || 0;
		this.frame = 0;
		this.totalElapsed = 0;
		this.isPaused = false;
	}

	Animation.prototype.updateFrame = function(elapsed) {
		if(this.isPaused)
			return;
		this.totalElapsed += elapsed;
		if(this.totalElapsed > this.timePerFrame) {
			this.frame++;
			this.frame = this.frame % this.framecount;
			this.totalElapsed -= this.timePerFrame;
		}
	}

	Animation.prototype.drawFrame = function(ctx, texture, tx, ty) {
		ctx.drawImage(texture,
					  parseInt((this.frameWidth * this.frame) + this.offsetX),
					  parseInt(this.offsetY),
					  parseInt(this.frameWidth),
					  parseInt(this.frameHeight),
					  parseInt(tx),
					  parseInt(ty),
					  parseInt(this.frameWidth),
					  parseInt(this.frameHeight));
	}

	Animation.prototype.reset = function() {
		this.frame = 0;
		this.totalElapsed = 0;
	}

	Animation.prototype.stop = function() {
		this.pause();
		this.reset();
	}

	Animation.prototype.play = function() {
		this.isPaused = false;
	}

	Animation.prototype.pause = function() {
		this.isPaused = true;
	}

	window.Animation = Animation;

})(window);