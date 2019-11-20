import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MbscScrollViewOptions } from '@mobiscroll/angular';
import { Router } from '@angular/router';

import data from "../common";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  url = "https://raw.githubusercontent.com/ManhTuongCN/dataJson/master/dataBooks.json";
  results: any;
  scrollViewOptions: MbscScrollViewOptions = {
    layout: 'fixed',
    itemWidth: 150,
    snap: false
  };

  constructor(private http: HttpClient, private router: Router) {
      this.results = this.http.get(this.url).pipe(
        map(
          results => {
            console.log('RAW :: ',results);
            return results;
          }
        )
      );
  }
  detailBook(object){
    data.dataBook = object;
    this.router.navigate(["news/" + object.id]);
  }
}
