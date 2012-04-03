(function(window) {
	
	"use strict";

	function EntityContainer() {
		this.initialize();
	}

	EntityContainer.prototype.initialize = function() {
		this.children = [];
	}

	EntityContainer.prototype.update = function(game) {
		var childrenLength = this.children.length;
		var children = this.children.slice(0);

		for(var i = 0; i < childrenLength; i++) {
			children[i].update(game);
		}
	}

	EntityContainer.prototype.draw = function(ctx) {
		var childrenLength = this.children.length;
		var children = this.children.slice(0);

		for(var i = 0; i < childrenLength; i++) {
			children[i].draw(ctx);
		}
	}

	EntityContainer.prototype.addChild = function(child) {
		if(child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.push(child);
	}

	EntityContainer.prototype.addChildAt = function(child, index) {
		if(child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.splice(index, 0, child);
	}

	EntityContainer.prototype.removeChild = function(child) {
		this.removeChildAt(this.children.indexOf(child));
	}

	EntityContainer.prototype.removeChildAt = function(index) {
		if(index < 0 || index > this.children.length - 1) { return false; }
		this.children[index].parent = null;
		this.children.splice(index, 1);
		return true;
	}

	EntityContainer.prototype.removeAllChildren = function() {
		while(this.children.length) { this.removeChildAt(0); }
	}

	EntityContainer.prototype.getChildAt = function(index) {
		return this.children[index];
	}

	EntityContainer.prototype.getChildIndex = function(child) {
		return this.children.indexOf(child);
	}

	EntityContainer.prototype.getNumChildren = function() {
		return this.children.length;
	}

	EntityContainer.prototype.containsChild = function(child) {
		while (child) {
			if (child == this) { return true; }
			child = child.parent;
		}
		return false;
	}

	window.EntityContainer = EntityContainer;

})(window);