# angular2minimalist
Minimalistic angular2 confirm directive

## Installing  
1. Run "npm install --save angular-minimalist-confirm" 
2. Add ConfirmerModule to your module imports.  
Like so:  


## Using
```typescript
//... other imports
import { ConfirmerModule } from 'angular-minimalist-confirm';

@NgModule({
    imports: [ BrowserModule, FormsModule, ConfirmerModule ],
    declarations: [ TestComponent ],
    bootstrap:    [ TestComponent ]
})
export class AppModule { }
``` 

A component with a function to fire
```typescript 
export class TestComponent {
    testText: string = "this is the initial text";

    accept(){
        console.log('Deleted yourself');
    }
}
```
And the html template using the directive
```html
<button confirm [accept]="accept" confirmText="Are you sure you wanna do that?">Delete yourself</button>
```
