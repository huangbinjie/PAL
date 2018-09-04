"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/menu/Menu");
var Name_1 = require("@components/name/Name");
var OpenMenuEntity = /** @class */ (function () {
    function OpenMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("打开");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return OpenMenuEntity;
}());
exports.OpenMenuEntity = OpenMenuEntity;