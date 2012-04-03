(function(window) {

	"use strict";

	function Sprite() {}

	Sprite.prototype = new Entity();
	Sprite.prototype.entity_initialize = Sprite.prototype.initialize;

	Sprite.prototype.initialize = function(texture) {
		this.entity_initialize();
		this.animations = [];
		this.currentAnimation = null;
		this.texture = texture;
	}

	Sprite.prototype.update = function(game) {
		this.currentAnimation.updateFrame(game.gameTime.elapsed);
	}

	Sprite.prototype.draw = function(ctx) {
		this.currentAnimation.drawFrame(ctx, this.texture, this.x, this.y);
	}

	Sprite.prototype.addAnimation = function(animation) {
		this.animations.push(animation);
	}

	Sprite.prototype.changeAnimation = function(animationName) {
		for(var i = 0; i < this.animations.length; i++) {
			if(this.animations[i].name == animationName) {
				this.currentAnimation = this.animations[i];
				this.currentAnimation.reset();
				return true;
			}
		}
		return false;
	}

	window.Sprite = Sprite;

})(window);