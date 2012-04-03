(function(window) {
	
	"use strict";

	function Stage() {}

	Stage.prototype = new EntityContainer();
	Stage.prototype.entity_container_initialize = Stage.prototype.initialize;
	Stage.prototype.entity_container_update = Stage.prototype.update;
	Stage.prototype.entity_container_draw = Stage.prototype.draw;

	Stage.prototype.initialize = function(canvas) {
		this.entity_container_initialize();
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
	}

	Stage.prototype.getStageWidth = function() { return this.canvas.width; }
	Stage.prototype.setStageWidth = function(width) { this.canvas.width = width; }
	Stage.prototype.getStageHeight = function() { return this.canvas.height; }
	Stage.prototype.setStageHeight = function(height) { this.canvas.height = height; }

	Stage.prototype.update = function(game) {
		this.entity_container_update(game);
	}

	Stage.prototype.draw = function() {
		this.entity_container_draw(this.ctx);
	}

	window.Stage = Stage;

})(window);