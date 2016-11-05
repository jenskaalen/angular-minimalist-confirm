import { ConfirmerConfiguration } from './../src/confirmer.configuration';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { ConfirmerModule } from '../src/confirmer.module';

export class ConfirmerConfigExt extends ConfirmerConfiguration 
{
    constructor()
    {
        console.log('confirmer ext represent');
        super();
        this.acceptButtonClasses = ["accept-button"];
        this.cancelButtonClasses = ["cancel-button"];
    }
}

@NgModule({
    imports: [ BrowserModule, FormsModule, ConfirmerModule ],
    declarations: [ TestComponent ],
    providers: [ { provide: ConfirmerConfiguration, useClass: ConfirmerConfigExt } ],
    bootstrap:    [ TestComponent ]
})
export class AppModule { }