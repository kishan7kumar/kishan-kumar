import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/js/particles.json', null);
  }

  handleContactClick(){
    this.router.navigate(['/contact'])
  }

  

}
