import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Tooltip } from './tooltip.model';
import { Employee } from '../employee/employee.model';

@Component({
  selector: '[app-tooltip]',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit, OnChanges {
  //@Input() businessentityid: number; 
  @Input() employee_tt: Employee; 
  

  constructor(private http: Http) {   	
  }

  ngOnChanges() {

    
  }

  ngOnInit() {

    
  }


}
