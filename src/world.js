"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var socialGroups_1 = require("./socialGroups");
var World = /** @class */ (function () {
    function World() {
        this.map = [];
        this.history = [];
    }
    World.prototype.initWorld = function (n) {
        var line = [];
        for (var y = 0; y < n; y++) {
            line.push(0);
        }
        for (var y = 0; y < n; y++) {
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
    return World;
}());
exports["default"] = World;
var astroWorld = new World();
var antiSocial = new socialGroups_1["default"](astroWorld.getGrid());
astroWorld.initWorld(5);
antiSocial.bar(2, 2);
astroWorld.displayGrid();
console.log(astroWorld.getNeighbour(1, 2));
