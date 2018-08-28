import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
