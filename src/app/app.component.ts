import { Component, DoCheck } from '@angular/core';
import { AppRoutes } from './app-routing.module';
import { Router } from '@angular/router';

interface TabsetItem {
  route: string;
  title: string;
  active: boolean;
  radius: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  tabsetItems: TabsetItem[] = [
    {
      active: false,
      route: AppRoutes.Painel,
      title: 'Painel',
      radius: false
    },
    {
      active: false,
      route: AppRoutes.Formulários,
      title: 'Formulário',
      radius: false
    },
    {
      active: false,
      route: AppRoutes.Tabelas,
      title: 'Tabelas',
      radius: false
    }
  ];

  constructor(private router: Router) {}

  ngDoCheck() {
    this.tabsetItems.forEach((item: TabsetItem) => {
      item.radius = false;
    });
    this.tabsetItems.forEach((item: TabsetItem, index: number) => {
      item.active = this.router.url.indexOf(item.route) >= 0;
      if (this.router.url.indexOf(item.route) >= 0) {
        this.tabsetItems[index - 1]
          ? (this.tabsetItems[index - 1].radius = true)
          : // tslint:disable-next-line: no-unused-expression
            null;
      }
    });
  }
}
