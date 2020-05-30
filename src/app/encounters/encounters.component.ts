import { Component, TemplateRef } from '@angular/core';
import { Encounter } from '../models/encounter.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NPC } from '../models/npc.model';

@Component({
  selector: 'encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent {
  constructor(private modalService: BsModalService) {}
  newLabel = "Encounter";
  encounters: Encounter[] = [];
  encounter: Encounter;
  npc: string;
 
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  openModal(newTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(newTemplate, this.config);
  }

  viewModal(viewTemplate: TemplateRef<any>, encounter: Encounter) {
    this.encounter = encounter;
    this.modalRef = this.modalService.show(viewTemplate, this.config);
  }
  
  editModal(template: TemplateRef<any>, encounter: Encounter) {
    this.encounter = encounter;
    this.modalRef = this.modalService.show(template, this.config);
  }

  deleteModal(template: TemplateRef<any>, encounter: Encounter) {
    this.encounter = encounter;
    this.modalRef = this.modalService.show(template, this.config);
  }

  add(encounter) {
    this.encounters.push(new Encounter(encounter.value));
    this.modalRef.hide();
  }

  addNpc(encounter: Encounter, npcName) {
    let index = this.findIndexOfEncounter(encounter)
    encounter.Npcs.push(new NPC(npcName.value));
    this.encounters[index] = encounter;
  }

  removeNpc(encounter: Encounter, npc: NPC) {
    let index = this.findIndexOfEncounter(encounter);
    this.encounters[index].Npcs = this.encounters[index].Npcs.filter(item => item !== npc)
  }

  delete(encounter) {
    var index = this.encounters.indexOf(encounter);
    this.encounters.splice(index);
    this.modalRef.hide();
  }

  findIndexToUpdate(newItem) { 
    return newItem.Name === this;
  }

  findIndexOfEncounter(encounter) {
    let updateItem = this.encounters.find(this.findIndexToUpdate, encounter.Name);
    return this.encounters.indexOf(updateItem);
  }
}
