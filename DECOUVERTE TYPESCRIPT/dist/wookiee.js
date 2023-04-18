"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wookiee = exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(name) {
        this.name = name;
    }
    Weapon.prototype.fire = function () { };
    return Weapon;
}());
exports.Weapon = Weapon;
/**
 * C'est ma super classe
 */
var Wookiee = /** @class */ (function () {
    function Wookiee(name) {
        this.name = name;
    }
    return Wookiee;
}());
exports.Wookiee = Wookiee;
