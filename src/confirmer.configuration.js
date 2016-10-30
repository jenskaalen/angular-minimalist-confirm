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
        this.htmlText = "<button name=\"cancel\">Deleteme</button>";
        this.htmlBase = "<div class=\"confirm-overlay\">\n    <style>\n        .confirm-overlay {\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background: rgba(0, 0, 0, 0.7);\n        }\n        .confirm-box{\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            min-width: 250px;\n            min-height: 100px;\n        }\n    </style>\n    <div class=\"confirm-box\">[box]</div></div>";
    }
    ConfirmerConfiguration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfirmerConfiguration);
    return ConfirmerConfiguration;
}());
exports.ConfirmerConfiguration = ConfirmerConfiguration;
//# sourceMappingURL=confirmer.configuration.js.map