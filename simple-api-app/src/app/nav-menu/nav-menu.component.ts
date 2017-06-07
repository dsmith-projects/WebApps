import { Component, OnInit, Input } from '@angular/core';
import { NavDetails } from '../nav.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input('items') items: NavDetails[];

  constructor() { }

  ngOnInit() {
  }

}
