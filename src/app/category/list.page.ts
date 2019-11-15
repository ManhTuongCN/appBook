import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
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

  public items: Array<{ title: string; note: string; icon: string }> = [];

  url = "https://raw.githubusercontent.com/ManhTuongCN/dataJson/master/dataBook.json";
  results: any;

  constructor(private http: HttpClient) {

    this.results = this.http.get(this.url).pipe(
      map(
        results => {
          console.log("sjdhjfsdjfg");
          console.log('RAW :: ',results);
          return results;
        }
      )
    );

  }

  ngOnInit() {
    // this.results = this.http.get(this.url).pipe(
    //     map(
    //       results => {
    //         console.log("sjdhjfsdjfg");
    //         console.log('RAW :: ',results);
    //         return results;
    //       }
    //     )
    //   );
  }

}
