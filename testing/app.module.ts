import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { ConfirmerModule } from '../src/confirmer.module';

@NgModule({
    imports: [ BrowserModule, FormsModule, ConfirmerModule ],
    declarations: [ TestComponent ],
    bootstrap:    [ TestComponent ]
})
export class AppModule { }