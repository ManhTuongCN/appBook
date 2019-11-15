import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from "../common";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  showInfor: any;
  constructor(private activeRouter: ActivatedRoute) {
  
   }

  ngOnInit() {
    this.showInfor = data.dataBook;
  }

}
