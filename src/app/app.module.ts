import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NpcsComponent } from './npcs/npcs.component';
import { EncountersComponent } from './encounters/encounters.component';

@NgModule({
  declarations: [
    AppComponent,
    NpcsComponent,
    EncountersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
