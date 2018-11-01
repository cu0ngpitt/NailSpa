import { Component, OnInit, HostListener } from '@angular/core';

import { Nails } from '../../models/nails';
import { Polish } from '../../models/polish';
import { Price } from '../../models/price';


import { SidebarService } from '../../services/sidebar.service';
import { PricesService } from '../../services/prices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  show: boolean = false;

  /* Nails Data */
  nails: Nails[];
  dips: Nails[];
  regPolish: Polish[];
  gelPolish: Polish[];
  others: Nails[];

  /* Pedicure Data */
  pedicure: Price[];

  /* Manicure Data */
  manicure: Price[];

  /* Waxing Data */
  waxing: Price[];

  /* For Kids Data */
  kids: Price[];
  kidPolish: Nails[];

  constructor(public sidebar: SidebarService,
              private prices: PricesService) { }

  ngOnInit() {
    this.getNails();
    this.getPedicure();
    this.getManicure();
    this.getWax();
    this.getKids();
  }

  scrollTo(link) {
    let fragment = link;
    document.querySelector('#' + fragment).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      this.show = window.pageYOffset > 0;
    }

  getNails(): void {
    this.prices.getNails()
      .subscribe((nail: any) => {
        this.nails = nail.acrylic;
        this.dips = nail.dip;
        this.regPolish = nail.regPolish;
        this.gelPolish = nail.gelPolish;
        this.others = nail.other;
      });
  }

  getPedicure(): void {
    this.prices.getPedicure()
      .subscribe((pedi: any) => {
        this.pedicure = pedi.pedi;
      });
  }

  getManicure(): void {
    this.prices.getManicure()
      .subscribe((mani: any) => {
        this.manicure = mani.mani;
      });
  }

  getWax(): void {
    this.prices.getWax()
      .subscribe((wax: any) => {
        this.waxing = wax.wax;
      });
  }

  getKids(): void {
    this.prices.getKids()
      .subscribe((kids: any) => {
        this.kids = kids.kids;
        this.kidPolish = kids.kidPolish;
      });
  }
}
