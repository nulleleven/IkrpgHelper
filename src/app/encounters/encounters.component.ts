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
  newLabel = "Encounter"
 
  modalRef: BsModalRef;
  config = {
    animated: true
  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  add(encounter) {
    this.encounters.push(new Encounter(encounter.value));
  }
}
