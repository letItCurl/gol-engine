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
    return SocialGroups;
}());
exports["default"] = SocialGroups;
