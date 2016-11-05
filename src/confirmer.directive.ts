import { AppModule } from './../testing/app.module';
import { Input, Renderer, Directive, OnInit, ElementRef } from '@angular/core';
import { ConfirmerConfiguration } from "./confirmer.configuration";
import { Injectable, Inject } from '@angular/core';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective implements OnInit {
    @Input() accept: Function;
    @Input() confirmText: string;

    constructor(@Inject(ConfirmerConfiguration) private config: ConfirmerConfiguration, private element: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        if (!this.confirmText) {
            this.confirmText = this.config.defaultText;
        }

        let ele: HTMLElement = this.element.nativeElement;
        let createConfirm = this.createConfirm;
        let that = this;

        ele.addEventListener('click', () => {
            createConfirm(that);
        });
    }

    private createConfirm(that) {
        let confirmElement = document.createElement('div');
        confirmElement.innerHTML = that.config.htmlBase;
        let accept = that.accept;
        confirmElement.querySelector('.confirm-text').textContent = that.confirmText;
        confirmElement.querySelector('[name=accept]').addEventListener('click', () => {
            confirmElement.remove();
            accept();
        });

        var cancelBtn = confirmElement.querySelector('[name=cancel]');
        var acceptBtn = confirmElement.querySelector('[name=accept]'); 

        confirmElement.querySelector('.confirm-overlay').addEventListener('click', () => {
            confirmElement.remove();
        });

        if (that.config.cancelButtonClasses) {
            that.config.cancelButtonClasses.forEach(cssClass => {
                cancelBtn.classList.add(cssClass);
            });
        }
        
        if (that.config.acceptButtonClasses) {
            that.config.acceptButtonClasses.forEach(cssClass => {
                acceptBtn.classList.add(cssClass); 
            });
        }

        that.element.nativeElement.appendChild(confirmElement);
    }
}