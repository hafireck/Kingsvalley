(function(window) {
	
	"use strict";

	var UID = 0;

	function Entity() {}

	Entity.prototype.initialize = function() {
		this.id = UID;
		UID++;
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
	}

	Entity.prototype.update = function(game) { };
	Entity.prototype.draw = function(ctx) { };

	window.Entity = Entity;

})(window);