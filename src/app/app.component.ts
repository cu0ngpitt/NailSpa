import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = false;

  contactBox() {
    if(this.show === false) {
      this.show = true;
    } else if (this.show === true) {
      this.show = false;
    }
  }
}
