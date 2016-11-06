
import { Input, EventEmitter, Output, Renderer, Directive, OnInit, ElementRef } from '@angular/core';
import { ConfirmerConfiguration } from "./confirmer.configuration";
import { Injectable, Inject } from '@angular/core';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective implements OnInit {
    @Output() accept = new EventEmitter();
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

        ele.addEventListener('click', (e) => {
            createConfirm(that);
        });
    }

    private createConfirm(that) {
        let confirmElement = document.createElement('div');
        confirmElement.classList.add('confirm-overlay');
        confirmElement.innerHTML = that.config.htmlBase;
        let accept = that.accept;
        confirmElement.querySelector('.confirm-text').textContent = that.confirmText;

        var cancelBtn = confirmElement.querySelector('[name=cancel]');
        var acceptBtn = confirmElement.querySelector('[name=accept]'); 

        acceptBtn.addEventListener('click', () => {
            accept.emit(null);
            confirmElement.remove();
        });
        cancelBtn.addEventListener('click', (e) => {
            confirmElement.remove();
        });

        confirmElement.addEventListener('click', (e) => {
            confirmElement.remove();
        });

        confirmElement.querySelector('.confirm-box').addEventListener('click', (e) => {
            e.stopPropagation();
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

        document.body.appendChild(confirmElement);
    }
}