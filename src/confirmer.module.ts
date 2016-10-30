import { NgModule } from '@angular/core';
import { ConfirmDirective } from "./confirmer.directive";
import { ConfirmerConfiguration } from "./confirmer.configuration";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [ConfirmDirective],
    providers: [ConfirmerConfiguration],
    exports: [ConfirmDirective]
})
export class ConfirmerModule { }