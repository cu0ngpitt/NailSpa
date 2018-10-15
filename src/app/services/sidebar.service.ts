import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public state = 'inactive';  //for navbar sidebar
  public show = false;        //for contact sidebar

  constructor() { }

  contactBox() {
    if(this.show === false) {
      this.show = true;
      document.getElementById('navbarNav').style.width = '0';
    } else if (this.show === true) {
      this.show = false;
    }
  }

  toggleNavbar() {
    if (this.state === 'inactive') {
      document.getElementById('navbarNav').style.width = '250px';
      this.state = 'active';
      this.show = false;
    } else if (this.state === 'active') {
      document.getElementById('navbarNav').style.width = '0';
      this.state = 'inactive';
    }
  }

  closeContactBox() {
    if(this.show === true) {
      this.show = false;
    }
  }
}
