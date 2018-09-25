import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './Component/test-component/test-component.component';

@NgModule({
   entryComponents: [
    TestComponentComponent
   ],
   declarations: [
      AppComponent,
      TestComponentComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: []
})
export class AppModule {
   constructor(private injector: Injector) {
      const firstComponent = createCustomElement(TestComponentComponent, { injector });
      customElements.define('app-first-component', firstComponent);
   }

   ngDoBootstrap() {}
}





