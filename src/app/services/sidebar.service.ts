import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public state = 'inactive';

  constructor() { }

  toggleNavbar() {
    if (this.state === 'inactive') {
      document.getElementById('navbarNav').style.width = '250px';
      this.state = 'active';
    } else if (this.state === 'active') {
      document.getElementById('navbarNav').style.width = '0';
      this.state = 'inactive';
    }
  }
}
