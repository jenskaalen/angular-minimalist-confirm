# angular2minimalist
Minimalistic angular2 confirm directive

## Installing  
1. Run "npm install --save angular-minimalist-confirm" 
2. Add ConfirmerModule to your module imports.  
Like so:  

//... other imports
import { ConfirmerModule } from 'angular-minimalist-confirm';

@NgModule({
    imports: [ BrowserModule, FormsModule, ConfirmerModule ],
    declarations: [ TestComponent ],
    bootstrap:    [ TestComponent ]
})
export class AppModule { }