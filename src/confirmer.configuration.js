"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ConfirmerConfiguration = (function () {
    function ConfirmerConfiguration() {
        this.defaultText = "Are you sure?";
        this.htmlBase = "<div class=\"confirm-overlay\">\n    <style>\n        .confirm-overlay {\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background: rgba(0, 0, 0, 0.7);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        .confirm-box{\n            min-width: 250px;\n            min-height: 100px;\n            background-color: white;\n            flex-direction: column;\n            display: flex;\n            justify-content: space-around;\n        }\n        .confirm-text { \n            width: 100%;\n            padding: 5px;\n            margin: 5px;\n            text-align: center;\n            flex-grow: 1;\n        }\n        .confirm-box button { \n            margin: 1em;\n        }\n        .button-group { \n            text-align: center;\n        }\n    </style>\n    <div class=\"confirm-box\">\n    <div class=\"confirm-text\"></div>\n    <div class=\"button-group\">\n    <button name=\"cancel\">No</button>\n    <button name=\"accept\">Yes</button>\n    </div>\n    </div>\n    </div>";
    }
    ConfirmerConfiguration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfirmerConfiguration);
    return ConfirmerConfiguration;
}());
exports.ConfirmerConfiguration = ConfirmerConfiguration;
//# sourceMappingURL=confirmer.configuration.js.map