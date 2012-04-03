(function(window) {

	"use strict";

	function GameTime() {
		this.elapsed = 0;
		this.timeMultiplier = 1.0;
		this._now = 0;
		this._then = 0;
	}

	GameTime.prototype.reset = function() {
		this._then = Date.now();
	}

	GameTime.prototype.startUpdate = function() {
		this._now = Date.now();
		this.elapsed = ((this._now - this._then) * this.timeMultiplier) / 1000;
	}

	GameTime.prototype.endUpdate = function() {
		this._then = this._now;
	}

	window.GameTime = GameTime;

})(window);