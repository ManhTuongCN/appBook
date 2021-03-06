import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'logo-buffer'
    },
    {
      title: 'Category',
      url: '/category',
      icon: 'logo-buffer'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'logo-buffer'
    },
    {
      title: 'my profile',
      url: '/my-profile',
      icon: 'logo-buffer'
    },
    {
      title: 'sing up',
      url: '/sing-up',
      icon: 'logo-buffer'
    },
    {
      title: 'sing in',
      url: '/sing-in',
      icon: 'logo-buffer'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
