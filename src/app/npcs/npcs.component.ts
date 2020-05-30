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
  newLabel = "NPC";
  npcs: NPC[] = [];
  npc: NPC;
 
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
    this.modalRef.hide();
  }
  
  editModal(template: TemplateRef<any>, npc: NPC) {
    this.npc = npc;
    this.modalRef = this.modalService.show(template, this.config);
  }

  deleteModal(template: TemplateRef<any>, npc: NPC) {
    this.npc = npc;
    this.modalRef = this.modalService.show(template, this.config);
  }

  viewModal(viewTemplate: TemplateRef<any>, npc: NPC) {
    this.npc = npc;
    this.modalRef = this.modalService.show(viewTemplate, this.config);
  }

  update(npc: NPC) {
    var index = this.npcs.indexOf(npc);
    this.npcs[index] = npc;
    this.modalRef.hide();
  }

  removeNpc(npc: NPC) {
    var index = this.npcs.indexOf(npc);
    this.npcs.splice(index);
    this.modalRef.hide();
  }
}
