import { Component, TemplateRef } from '@angular/core';
import { Encounter } from '../models/encounter.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent {
  constructor(private modalService: BsModalService) {}
  encounters: Encounter[] = [];
  newLabel = "Encounter";
  encounter: Encounter;
 
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

  update(encounter) {
    this.encounters.push(new Encounter(encounter.value));
    this.modalRef.hide();
  }

  delete(encounter) {
    var index = this.encounters.indexOf(encounter);
    this.encounters.splice(index);
    this.modalRef.hide();
  }
}
