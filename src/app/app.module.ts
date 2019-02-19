import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { BtnCountingDirective } from './btn-counting.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    BtnCountingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
