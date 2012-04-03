(function(window) {
	
	"use strict";

	function BlockYellow(x, y) {
		this.entity_initialize(x, y);
	}

	BlockYellow.prototype = new Entity();
	BlockYellow.prototype.entity_initialize = BlockYellow.prototype.intialize;

	BlockYellow.prototype.intialize = function(x, y) {
		this.entity_initialize();
		this.x = x;
		this.y = y;
		this.width = 16;
		this.height = 16;
	}

	window.BlockYellow = BlockYellow;

})(window);