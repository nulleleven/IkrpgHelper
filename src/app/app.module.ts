import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
