import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'MyWebsite';
  public showMenu = false;

  constructor(private router: Router, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  handleMenuBarClick() {
    this.showMenu = !this.showMenu;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    window.open(
      "assets/Kishan_Kumar.pdf"
    )
  }

  handleTabClick() {
    if (window.matchMedia("only screen and (max-width: 1024px)").matches) {
      this.showMenu = !this.showMenu;
    }
  }

  handlleSocialButtonClick(url: string) {
    window.open(
      url,
      '_blank'
    )
  }


}
