import { Component } from '@angular/core';

@Component({
  selector: 'encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent {
  encounters = [
    { title: "Jungle trail",
      npcs: [] }    
  ];  
}
