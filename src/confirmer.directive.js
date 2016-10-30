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
var confirmer_configuration_1 = require("./confirmer.configuration");
var ConfirmDirective = (function () {
    function ConfirmDirective(config) {
        this.config = config;
    }
    ConfirmDirective.prototype.ngOnInit = function () {
        var element = document.createElement('div');
        element.classList.add('classOverlay');
        var accept = this.accept;
        element.innerHTML = this.config.htmlBase.replace('[box]', this.config.htmlText);
        element.querySelector('[name=cancel]').addEventListener('click', function () {
            element.remove();
            accept();
        });
        document.body.appendChild(element);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], ConfirmDirective.prototype, "accept", void 0);
    ConfirmDirective = __decorate([
        core_1.Directive({
            selector: '[confirm]',
            providers: [confirmer_configuration_1.ConfirmerConfiguration]
        }), 
        __metadata('design:paramtypes', [confirmer_configuration_1.ConfirmerConfiguration])
    ], ConfirmDirective);
    return ConfirmDirective;
}());
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=confirmer.directive.js.map