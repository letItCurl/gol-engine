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
    function World(name) {
        this.name = name;
        this.map = [];
    }
    World.prototype.display = function (toDisp) {
        if (toDisp === void 0) { toDisp = this.name; }
        console.log(toDisp);
    };
    World.prototype.initWorld = function (n) {
        var line = [];
        for (var y = 0; y < n; y++) {
            line.push(0);
        }
        for (var y = 0; y < n; y++) {
            this.map.push(__spreadArrays(line));
        }
        console.log(line);
    };
    World.prototype.displayGrid = function () {
        console.log(this.map);
    };
    World.prototype.getGrid = function () {
        return this.map;
    };
    return World;
}());
exports["default"] = World;
var astroWorld = new World('travis');
var antiSocial = new socialGroups_1["default"](astroWorld.getGrid());
astroWorld.initWorld(5);
antiSocial.bar(2, 2);
astroWorld.displayGrid();
