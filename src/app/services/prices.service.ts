import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private nailsUrl = './assets/price-data/nails.json';
  private pediUrl = './assets/price-data/pedicure.json';
  private maniUrl = './assets/price-data/manicure.json';
  private waxUrl = './assets/price-data/waxing.json';
  private kidsUrl = './assets/price-data/kids.json';

  constructor(private http: HttpClient) { }

  getNails() {
    return this.http.get(this.nailsUrl);
  }

  getPedicure() {
    return this.http.get(this.pediUrl);
  }

  getManicure() {
    return this.http.get(this.maniUrl);
  }

  getWax() {
    return this.http.get(this.waxUrl);
  }

  getKids() {
    return this.http.get(this.kidsUrl);
  }
}
