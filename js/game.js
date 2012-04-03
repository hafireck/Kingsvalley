(function(window) {
	
	"use strict";

	function Game(canvas) {}

	Game.prototype = new Stage();
	Game.prototype.stage_initialize = Game.prototype.initialize;
	Game.prototype.stage_update = Game.prototype.update;
	Game.prototype.stage_draw = Game.prototype.draw;

	Game.prototype.initialize = function(canvas, manifest) {
		this.stage_initialize(canvas);
		this._runGame = false;
		this.inputHandler = new InputHandler();
		this.gameTime = new GameTime();

		var self = this;
		ContentManager.contentLoaded = function() {
			self.onload();
			self.start();
		};
		ContentManager.loadManifest(manifest);
	}

	Game.prototype.onload = function() {};

	Game.prototype.start = function() {
		if(!this._runGame) {
			this._runGame = true;
			this.gameTime.reset();
			var self = this;
			window.requestAnimationFrame(function() { self.gameLoop(); });
		}
	}

	Game.prototype.pause = function() {
		this._runGame = false;
	}

	Game.prototype.gameLoop = function() {
		this.gameTime.startUpdate();

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.update(this);
		this.draw();

		this.gameTime.endUpdate();
		this.inputHandler.update();

		if(this._runGame) {
			var self = this;
			window.requestAnimationFrame(function() { self.gameLoop(); });
		}
	}

	window.Game = Game;

})(window);