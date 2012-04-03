(function(window) {

    "use strict";

    function InputHandler() {
        this.initialize();
    }

    InputHandler.prototype.initialize = function() {
        this._curKeys = [];
        this._prevKeys = [];
        var self = this;
        window.addEventListener("keydown", function(e) { self._keyPress(e); }, false);
        window.addEventListener("keyup", function(e) { self._keyRelease(e); }, false);
    }

    InputHandler.prototype._keyPress = function(e) { this._curKeys[e.keyCode] = true; }
    InputHandler.prototype._keyRelease = function(e) { this._curKeys[e.keyCode] = false; }

    InputHandler.prototype.update = function() {
        for(var i = 0; i < this._curKeys.length; i++)
            this._prevKeys[i] = this._curKeys[i];
    }

    InputHandler.prototype.isKeyDown = function(key) { return this._curKeys[key] || false; }
    InputHandler.prototype.isKeyUp = function(key) { return !this._curKeys[key] || false; }
    InputHandler.prototype.isKeyPressed = function(key) { return (this._curKeys[key] && !this._prevKeys[key]) || false; }
    InputHandler.prototype.isKeyReleased = function(key) { return (!this._curKeys[key] && this._prevKeys[key]) || false; }

    window.InputHandler = InputHandler;
    window.KEYS = {
        "backspace": 8,
        "tab": 9,
        "enter": 13,
        "shift": 16,
        "ctrl": 17,
        "alt": 18,
        "pause": 19,
        "capslock": 20,
        "esc": 27,
        "pageup": 33,
        "pagedown": 34,
        "end": 35,
        "home": 36,
        "left": 37,
        "up": 38,
        "right": 39,
        "down": 40,
        "insert": 45,
        "delete": 46,
        "0": 48,
        "1": 49,
        "2": 50,
        "3": 51,
        "4": 52,
        "5": 53,
        "6": 54,
        "7": 55,
        "8": 56,
        "9": 57,
        "a": 65,
        "b": 66,
        "c": 67,
        "d": 68,
        "e": 69,
        "f": 70,
        "g": 71,
        "h": 72,
        "i": 73,
        "j": 74,
        "k": 75,
        "l": 76,
        "m": 77,
        "n": 78,
        "o": 79,
        "p": 80,
        "q": 81,
        "r": 82,
        "s": 83,
        "t": 84,
        "u": 85,
        "v": 86,
        "w": 87,
        "x": 88,
        "y": 89,
        "z": 90,
        "num0": 96,
        "num1": 97,
        "num2": 98,
        "num3": 99,
        "num4": 100,
        "num5": 101,
        "num6": 102,
        "num7": 103,
        "num8": 104,
        "num9": 105,
        "multiply": 106,
        "plus": 107,
        "minus": 109,
        "dot": 110,
        "slash1": 111,
        "F1": 112,
        "F2": 113,
        "F3": 114,
        "F4": 115,
        "F5": 116,
        "F6": 117,
        "F7": 118,
        "F8": 119,
        "F9": 120,
        "F10": 121,
        "F11": 122,
        "F12": 123,
        "equal": 187,
        "coma": 188,
        "slash": 191,
        "backslash": 220
    };

})(window);