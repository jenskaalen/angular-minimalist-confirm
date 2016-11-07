[![npm version](https://badge.fury.io/js/angular-minimalist-confirm.svg)](https://badge.fury.io/js/angular-minimalist-confirm)

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

##Configuring the look
At the moment you have just two ways of configuring the looks, both are by overriding the ConfirmerConfiguration class.   
1. Changing the whole html template for the modal. The only thing that is required the following:  
* Two buttons that are have the html attribute 'name="cancel' and 'name=accept'.  
 Like so  
 ```html
<button name="cancel">No</button>
<button name="accept">Yes</button>
```

2. You can add css classes to the buttons. 

So, that becomes 
```typescript
export class ConfirmerConfigExt extends ConfirmerConfiguration 
{
    constructor()
    {
        super();
        this.acceptButtonClasses = ["accept-button"];
        this.cancelButtonClasses = ["cancel-button"];
        this.htmlBase = "<div class=\"whateverlayout\"><button name=\"cancel\">No</button><button name=\"accept\">Yes</button></div>"
    }
}

@NgModule({
    imports: [ BrowserModule, FormsModule, ConfirmerModule ],
    declarations: [ TestComponent ],
    providers: [ { provide: ConfirmerConfiguration, useClass: ConfirmerConfigExt } ],
    bootstrap:    [ TestComponent ]
})
```
