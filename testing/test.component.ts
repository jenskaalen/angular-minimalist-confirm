import { ConfirmerConfigExt } from './app.module';
import { ConfirmerConfiguration } from './../src/confirmer.configuration';
import { Component } from '@angular/core';
import { ConfirmDirective } from "../src/confirmer.directive";

@Component({
    selector: 'test-component',
    templateUrl: 'test.component.html'
})
export class TestComponent {
    testText: string = "this is the initial text";

    accept(){
        console.log('accepto');
    }
}