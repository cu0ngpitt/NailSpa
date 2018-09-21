import { Component, OnInit, HostListener } from '@angular/core';

const scrollPosition = window.pageYOffset;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  scrollTo(link) {
    let fragment = link;
    document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    console.log(window.pageYOffset);
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
