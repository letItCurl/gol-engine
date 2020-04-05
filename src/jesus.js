"use strict";
exports.__esModule = true;
var socialGroups_1 = require("./socialGroups");
var world_1 = require("./world");
var astroWorld = new world_1["default"](10);
var antiSocial = new socialGroups_1["default"](astroWorld.getGrid());
astroWorld.initWorld();
antiSocial.frog(4, 4);
astroWorld.generateDays();
console.log(astroWorld.history);

