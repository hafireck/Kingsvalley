(function(window) {
	
	"use strict";

	function Player(x, y) {
		this.initialize(x, y);
	}

	Player.prototype = new Sprite();
	Player.prototype.sprite_initialize = Player.prototype.initialize;
	Player.prototype.sprite_update = Player.prototype.update;
	Player.prototype.sprite_draw = Player.prototype.draw;

	Player.prototype.initialize = function(x, y) {
		this.sprite_initialize(ContentManager.images["player"]);
		this.x = x;
		this.y = y;
		this.width = 18;
		this.height = 32;
		this.speed = 120;
		this.addAnimation(new Animation("WalkRight", 8, 8, 18, 32));
		this.addAnimation(new Animation("StandRight", 1, 8, 18, 32, 36));
		this.addAnimation(new Animation("WalkLeft", 8, 8, 18, 32, 0, 32));
		this.addAnimation(new Animation("StandLeft", 1, 8, 18, 32, 36, 32));
		this.changeAnimation("StandRight");
		this.state = this.states.stand;
	}

	Player.prototype.update = function(game) {
		this.state(game);
		this.sprite_update(game);
	}

	Player.prototype.draw = function(ctx) {
		this.sprite_draw(ctx);
	}

	Player.prototype.states = {
		stand: function(game) {
			if(game.inputHandler.isKeyDown(KEYS.left)) {
				this.changeAnimation("WalkLeft");
				this.state = this.states.walkLeft;
			} else if(game.inputHandler.isKeyDown(KEYS.right)) {
				this.changeAnimation("WalkRight");
				this.state = this.states.walkRight;
			}
		},
		walkRight: function(game) {
			this.x += this.speed * game.gameTime.elapsed;
			if(game.inputHandler.isKeyUp(KEYS.right)) {
				this.changeAnimation("StandRight");
				this.state = this.states.stand;	
			}
		},
		walkLeft: function(game) {
			this.x -= this.speed * game.gameTime.elapsed;
			if(game.inputHandler.isKeyUp(KEYS.left)) {
				this.changeAnimation("StandLeft");
				this.state = this.states.stand;
			}
		}
	}

	window.Player = Player;

})(window);