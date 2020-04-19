import { Component } from '@angular/core';

@Component({
  selector: 'npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.css']
})
export class NpcsComponent {
  npcs = [
    { name: "Baddy guy",
      type: "Boss" }
  ];
}
