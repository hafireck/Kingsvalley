(function(window) {
	
	"use strict";
	
	function Level() {
		this.initialize();
	}

	Level.prototype = new EntityContainer();
	Level.prototype.entity_container_initialize = Level.prototype.initialize;

	Level.prototype.initialize = function() {
		this.entity_container_initialize();
		this.tiles = [];
	}

	Level.prototype.load = function(levelManifest) {
		for(var row = 0; row < levelManifest.length; row++) {
			for(var col = 0; col < levelManifest[row]; col++) {

				var tileId = levelManifest[row][col];
				var blocks = [];
				var player = null;

				switch(tileId) {
					case 0:
						this.tiles[row][col] = null;
					break;
					case 1:
						// Make player
					break;
					case 2:
						this.tiles[row][col] = new BlockYellow(row * 16, col * 16);
					break;
				}

			}
		}
	}

	window.Level = Level;

})(window);