import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponents2 } from './app.components2';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppComponents2]
})
export class AppModule { }
