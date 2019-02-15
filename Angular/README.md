AngularJs - MVM
Angular - MVVM



Typescript

Web application framework




scaffolding 





<body>
<app-root></app-root> 
</body>
Directive tag +functionailty



intex.html

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

main.ts





import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



main.ts = main.js (webpack)


NPM like pnpm 




1)  Services
Expose data across platforms
Restful Web Services
JSON


Product Tracker
Consume data (json) : Restful service 
static json
Objervables
Interesting tools 
Augury


Code:
Create a service 
The service will consume json data 
use (HTTP) observables
RxJs

ReactiveX.io



Interfaces
onChange
onClick



@input - one way binding input






@NgModule
class AppModule
{
  declaration:[C1,C2],
  imports:[BrowserModule],
  providers:[.....service],
  bootstrap:[c1]
}