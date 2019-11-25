import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import data from "../common";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss']
})

export class NewsPage implements OnInit {
  showInfor: any;
  content: any;
  constructor(private activeRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.showInfor = data.dataBook;
    this.content = this.showInfor.contentPage;
  }
  backToHome () {
    this.router.navigate(["home/"]);
  }

}
