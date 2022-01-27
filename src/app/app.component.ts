import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MyWebsite';

  redirect(website:any){
    if (website==='linkedin'){
      window.location.href = "https://www.linkedin.com/in/kishankumar3202";
    }
    if (website==='github'){
      window.location.href = "https://github.com/kishan7kumar";
    }
    if(website==='hackerrank'){
      window.location.href = "https://www.hackerrank.com/kishankumar3202";
    }
   
  }
}
