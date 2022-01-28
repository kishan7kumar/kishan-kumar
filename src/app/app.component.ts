import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'MyWebsite';
  public showMenu = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleMenuBarClick() {
    this.showMenu = !this.showMenu;
  }

  handleTabClick() {
    if (window.matchMedia("only screen and (max-width: 1024px)").matches) {
      this.showMenu = !this.showMenu;
    }
  }
}
