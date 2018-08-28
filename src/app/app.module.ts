import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ActivityOneComponent } from './activity-one/activity-one.component';
import { ActivityOneComponent } from './components/activity-one/activity-one.component';
import { ActivityTwoComponent } from './components/activity-two/activity-two.component';
import { ActivityThreeComponent } from './components/activity-three/activity-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityOneComponent,
    ActivityTwoComponent,
    ActivityThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
