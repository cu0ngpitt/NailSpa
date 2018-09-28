import { Component, OnInit, HostListener } from '@angular/core';

const scrollPosition = window.pageYOffset;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  nails: boolean = true;
  pedicure: boolean = true;
  manicure: boolean = true;
  waxing: boolean = true;
  kids: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(link) {
    let fragment = link;
    document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
/*    if(link === 'nails' && this.nails === false) {
      // accordions will close first
      this.pedicure = false;
      this.manicure = false;
      this.waxing = false;
      this.kids = false;

      // then open the clicked tab
      setTimeout(() => {
        this.nails = true;
      }, 1000);

      // then scroll to the opened tab
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1250);
    } else if(link === 'pedicure' && this.pedicure === false) {
      // accordions will close first
      this.nails = false;
      this.manicure = false;
      this.waxing = false;
      this.kids = false;

      // then open the clicked tab
      setTimeout(() => {
        this.pedicure = true;
      }, 1000);

      // then scroll to the opened tab
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1250);
    } else if(link === 'manicure' && this.manicure === false) {
      // accordions will close first
      this.nails = false;
      this.pedicure = false;
      this.waxing = false;
      this.kids = false;

      // then open the clicked tab
      setTimeout(() => {
        this.manicure = true;
      }, 1000);

      // then scroll to the opened tab
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1250);
    } else if(link === 'waxing' && this.waxing === false) {
      // accordions will close first
      this.nails = false;
      this.pedicure = false;
      this.manicure = false;
      this.kids = false;

      // then open the clicked tab
      setTimeout(() => {
        this.waxing = true;
      }, 1000);

      // then scroll to the opened tab
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1250);
    } else if(link === 'kids' && this.kids === false) {
      this.nails = false;
      this.pedicure = false;
      this.manicure = false;
      this.waxing = false;

      // then open the clicked tab
      setTimeout(() => {
        this.kids = true;
      }, 1000);

      // then scroll to the opened tab
      setTimeout(() => {
        document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 1250);
    }*/
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
