import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirect(website:any){
    if (website==='linkedin'){
      window.location.href = "https://www.linkedin.com/in/kishankumar3202";
    }
    if (website==='github'){
      window.location.href = "https://github.com/kishan7kumar";
    }
   
  }

}
