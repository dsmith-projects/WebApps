import { Component, OnInit, Input } from '@angular/core';
import { NavDetails } from '../nav.model'; 
import { Location } from '@angular/common'; // unsure what this import is for.... 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: '[nav-menu-item]',
	templateUrl: './nav-menu-item.component.html'
})

export class NavMenuItemComponent implements OnInit {
	@Input('item') item: NavDetails;

	constructor(private router: Router,
				private route: ActivatedRoute,
				private location: Location) {		
	}

	isActive(): boolean {
		return `/${this.item.path}` === this.location.path();
	}

	ngOnInit() {
  	}
}
	