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
  urlAsianHistory = "https://raw.githubusercontent.com/ManhTuongCN/dataJson/master/asianHistory.json";
  results: any = [];
  arrAsianHistory: any = [];
  scrollViewOptions: MbscScrollViewOptions = {
    layout: 'fixed',
    itemWidth: 150,
    snap: false
  };
 count = 0 ;

  constructor(private http: HttpClient, private router: Router) {
    let that = this;
      this.http.get(this.url).toPromise()
        .then((r) =>{
          console.log('JSON :: ',JSON.stringify(r));
          that.results = r;
        })
        .catch((e)=> console.log("error: " + e));
      this.arrAsianHistory = this.http.get(this.urlAsianHistory).pipe(
        map(
          result => {
            console.log('RAW :: ',result);
            that.count = (result as Array<any>).length;
            return result;
          }
        )
      );
  }
  detailBook(object){
    data.dataBook = object;
    this.router.navigate(["news/" + object.id]);
  }
}
