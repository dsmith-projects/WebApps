import { Component, OnInit, Input } from '@angular/core';
import { ApiModuleComponent } from '../api-module/api-module.component';
import { Result } from './result-module.model';

@Component({
  selector: '[app-result-module]',
  templateUrl: './result-module.component.html',
  styleUrls: ['./result-module.component.css']
})
export class ResultModuleComponent implements OnInit {
	@Input() result: Result;

  constructor() { }

  ngOnInit() {
  }

}
