import { AppModule } from './../testing/app.module';
import { Input, Renderer, Directive, OnInit, ElementRef } from '@angular/core';
import { ConfirmerConfiguration } from "./confirmer.configuration";
import { Injectable } from '@angular/core';

@Directive({
    selector: '[confirm]',
    providers: [ConfirmerConfiguration]
})
export class ConfirmDirective implements OnInit {
    @Input() accept: Function;
    @Input() confirmText: string;

    constructor(private config: ConfirmerConfiguration, private element: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        if (!this.confirmText) {
            this.confirmText = this.config.defaultText;
        }

        let ele: HTMLElement = this.element.nativeElement;
        let createConfirm = this.createConfirm;
        console.log(this.config);
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

        confirmElement.querySelector('[name=cancel],.confirm-overlay').addEventListener('click', () => {
            confirmElement.remove();
        });


        document.body.appendChild(confirmElement);
    }
}