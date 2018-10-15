import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sidebar: SidebarService) { }

  ngOnInit() {
  }

}
