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
    function ConfirmDirective(config, element, renderer) {
        this.config = config;
        this.element = element;
        this.renderer = renderer;
    }
    ConfirmDirective.prototype.ngOnInit = function () {
        if (!this.confirmText) {
            this.confirmText = this.config.defaultText;
        }
        var ele = this.element.nativeElement;
        var createConfirm = this.createConfirm;
        console.log(this.config);
        var that = this;
        ele.addEventListener('click', function () {
            createConfirm(that);
        });
    };
    ConfirmDirective.prototype.createConfirm = function (that) {
        var confirmElement = document.createElement('div');
        confirmElement.innerHTML = that.config.htmlBase;
        var accept = that.accept;
        confirmElement.querySelector('.confirm-text').textContent = that.confirmText;
        confirmElement.querySelector('[name=accept]').addEventListener('click', function () {
            confirmElement.remove();
            accept();
        });
        confirmElement.querySelector('[name=cancel],.confirm-overlay').addEventListener('click', function () {
            confirmElement.remove();
        });
        document.body.appendChild(confirmElement);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], ConfirmDirective.prototype, "accept", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDirective.prototype, "confirmText", void 0);
    ConfirmDirective = __decorate([
        core_1.Directive({
            selector: '[confirm]',
            providers: [confirmer_configuration_1.ConfirmerConfiguration]
        }), 
        __metadata('design:paramtypes', [confirmer_configuration_1.ConfirmerConfiguration, core_1.ElementRef, core_1.Renderer])
    ], ConfirmDirective);
    return ConfirmDirective;
}());
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=confirmer.directive.js.map