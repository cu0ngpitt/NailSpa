import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public sidebar: SidebarService) { }

  ngOnInit() {
  }
}
