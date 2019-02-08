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

