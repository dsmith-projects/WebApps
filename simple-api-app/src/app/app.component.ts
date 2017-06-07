import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavDetails } from './nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  	private router: Router,
  	@Inject('NavDetails') public details: NavDetails[]) {  	
  }
}
