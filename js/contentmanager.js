(function(window) {

	"use strict";

	function ContentManager() {
		this.initialize();
	}

	ContentManager.prototype.initialize = function() {
		this.images = [];
		this.sounds = [];
	}

	ContentManager.prototype.progressChanged = function(progress) {}
	ContentManager.prototype.contentLoaded = function() {}

	ContentManager.prototype.loadManifest = function(manifest) {
		var images = manifest.images || [];
		var sounds = manifest.sounds || [];
		var total = images.length + sounds.length;
		var remaining = total;
		var self = this;

		for(var i = 0; i < images.length; i++)
			this.loadImage(images[i], imageLoad, assetLoadError);

		for(var i = 0; i < sounds.length; i++)
			this.loadSound(sounds[i], soundLoad, assetLoadError);

		function imageLoad(name, value) {
			self.images[name] = value;
			remaining--;
			self.progressChanged(1 - remaining / total);
			if(remaining == 0)
				self.contentLoaded();
		}

		function soundLoad(name, value) {
			self.sounds[name] = value;
			remaining--;
			self.progressChanged(1 - remaining / total);
			if(remaining == 0)
				self.contentLoaded();
		}

		function assetLoadError(name, location) {
			console.error("Error loading asset " + name + " from \"" + location + "\".");
		}
	}

	ContentManager.prototype.loadImage = function(image, success, error) {
		var tempImage = new Image();

		tempImage.addEventListener("load", function(e) {
			tempImage.removeEventListener("load");
			success(image.name, tempImage);
		}, false);
		tempImage.addEventListener("error", function(e) {
			tempImage.removeEventListener("error");
			error(image.name, image.location);
		}, false);

		tempImage.src = image.location;
	}

	ContentManager.prototype.loadSound = function(sound, success, error) {
		var tempSound = new Audio();
		var location = "";

		if(sound.ogg && tempSound.canPlayType("audio/ogg; codecs=\"vorbis\"")) {
			location = sound.ogg;
		} else if(sound.mp3 && tempSound.canPlayType("audio/mpeg")) {
			location = sound.mp3;
		}

		tempSound.autoplay = false;
		tempSound.preload = true;

		tempSound.addEventListener("canplaythrough", function(e) {
			tempSound.removeEventListener("canplaythrough");
			success(sound.name, tempSound);
		}, false);

		tempSound.addEventListener("error", function(e) {
			tempSound.removeEventListener("error");
			error(sound.name, location);
		}, false);

		tempSound.src = location;
	}

	ContentManager.prototype.unload = function() {
		this.images = [];
		this.sounds = [];
	}

	window.ContentManager = new ContentManager;

})(window);