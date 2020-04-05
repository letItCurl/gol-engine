"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var World = /** @class */ (function () {
    function World(size) {
        if (size === void 0) { size = 30; }
        this.map = [];
        this.history = [];
        this.size = size;
    }
    World.prototype.initWorld = function () {
        var line = [];
        for (var y = 0; y < this.size; y++) {
            line.push(0);
        }
        for (var y = 0; y < this.size; y++) {
            this.map.push(__spreadArrays(line));
        }
    };
    World.prototype.displayGrid = function () {
        console.log(this.map);
    };
    World.prototype.getGrid = function () {
        return this.map;
    };
    World.prototype.getNeighbour = function (posx, posy) {
        var n = 0;
        for (var y = posy - 1; y <= posy + 1; y++) {
            for (var x = posx - 1; x <= posx + 1; x++) {
                var notMe = ((posx != x === false) && (posy != y === false));
                if (this.map[y][x] === 1 && !notMe) {
                    n++;
                }
            }
        }
        return n;
    };
    World.prototype.nextDay = function () {
        var _this = this;
        var liveAndLetDie = [];
        for (var y = 1; y < this.size - 1; y++) {
            for (var x = 1; x < this.size - 1; x++) {
                if (this.getNeighbour(x, y) === 3) {
                    liveAndLetDie.push([x, y, 1]);
                }
                else if (this.getNeighbour(x, y) < 2 || this.getNeighbour(x, y) > 3) {
                    liveAndLetDie.push([x, y, 0]);
                }
            }
        }
        if (this.history.length === 0) {
            this.history.push(JSON.parse(JSON.stringify(this.map)));
        }
        liveAndLetDie.forEach(function (el) {
            _this.map[el[1]][el[0]] = el[2];
        });
        this.history.push(JSON.parse(JSON.stringify(this.map)));
    };
    World.prototype.generateDays = function (time) {
        if (time === void 0) { time = 10; }
        for (var days = 0; days < time; days++) {
            this.nextDay();
        }
    };
    return World;
}());
exports["default"] = World;
