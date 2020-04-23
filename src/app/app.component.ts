import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NPC } from './models/npc.model';
import { Encounter } from './models/encounter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  page = "Encounters";
  newLabel = this.newLabelMaker();
  entryObj: any;

  changePage(page) {
    this.page = page.target.text;
    this.newLabel = this.newLabelMaker();
  }

  newLabelMaker() {
    return this.newLabel = this.page.substring(0, this.page.length - 1);;
  }
}
