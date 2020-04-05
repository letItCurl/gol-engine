"use strict";
exports.__esModule = true;
var SocialGroups = /** @class */ (function () {
    function SocialGroups(map) {
        this.map = map;
    }
    SocialGroups.prototype.bar = function (x, y) {
        this.map[y][x - 1] = 1;
        this.map[y][x] = 1;
        this.map[y][x + 1] = 1;
    };
    SocialGroups.prototype.block = function (x, y) {
        this.map[y][x] = 1;
        this.map[y][x + 1] = 1;
        this.map[y + 1][x] = 1;
        this.map[y + 1][x + 1] = 1;
    };
    SocialGroups.prototype.frog = function (x, y) {
        this.bar(x, y);
        this.bar(x + 1, y + 1);
    };
    return SocialGroups;
}());
exports["default"] = SocialGroups;
