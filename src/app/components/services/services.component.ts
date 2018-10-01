import { Component, OnInit, HostListener } from '@angular/core';

const scrollPosition = window.pageYOffset;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  scrollTo(link) {
    let fragment = link;
    document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }  
}
