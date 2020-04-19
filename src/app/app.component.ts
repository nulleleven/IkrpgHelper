import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 page = "Encounters";
 
 changePage(page) {
    this.page = page.target.text;
  }

  openModal() {
  }
}
