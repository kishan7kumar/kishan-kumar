import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'MyWebsite';
  public getScreenWidth: any;
  public getScreenHeight: any;
  public isMobileDevice = false;
  public showMenu = false;

  handleMenuBarClick() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    // this.getScreenWidth = window.innerWidth;
    // this.getScreenHeight = window.innerHeight;
    // if (this.getScreenWidth < 1024) {
    //   this.isMobileDevice = true;
    // }
    // if (this.getScreenWidth > 1024) {
    //   this.isMobileDevice = false;
    // }
  }


  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  //   if (this.getScreenWidth < 1024) {
  //     this.isMobileDevice = true;
  //   }
  //   if (this.getScreenWidth > 1024) {
  //     this.isMobileDevice = false;
  //   }
  // }

  redirect(website: any) {
    if (website === 'linkedin') {
      window.location.href = "https://www.linkedin.com/in/kishankumar3202";
    }
    if (website === 'github') {
      window.location.href = "https://github.com/kishan7kumar";
    }
    if (website === 'hackerrank') {
      window.location.href = "https://www.hackerrank.com/kishankumar3202";
    }

  }
}
