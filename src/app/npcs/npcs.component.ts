import { Component, TemplateRef } from '@angular/core';
import { NPC } from '../models/npc.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.css']
})
export class NpcsComponent {
  constructor(private modalService: BsModalService) {}
  npcs: NPC[] = [];
  newLabel = "NPC"
 
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  add(npc) {
    console.log(npc);
    this.npcs.push(new NPC(npc.value));
  }
}
