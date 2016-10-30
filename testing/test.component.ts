import { Component } from '@angular/core';
import { ConfirmDirective } from "../src/confirmer.directive";

@Component({
    selector: 'test-component',
    templateUrl: 'test.component.html',
    providers: [ConfirmDirective]
})
export class TestComponent {
    testText: string = "this is the initial text";

    accept(){
        console.log('accepto');
    }
}