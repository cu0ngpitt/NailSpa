import { Component, OnInit, HostListener } from '@angular/core';

const scrollPosition = window.pageYOffset;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  nails: boolean = false;
  pedicure: boolean = false;
  manicure: boolean = false;
  waxing: boolean = false;
  kids: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(link) {
    let fragment = link;
    if(link === 'nails' && this.nails === false) {
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 500);
    } else if(link === 'pedicure' && this.pedicure === false) {
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 500);
    } else if(link === 'manicure' && this.manicure === false) {
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 500);
    } else if(link === 'waxing' && this.waxing === false) {
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 500);
    } else if(link === 'kids' && this.kids === false) {
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 500);
    }
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          document.getElementById("myBtn").className = "to-top show";
      } else {
          document.getElementById("myBtn").className = "to-top hidden";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }
}
