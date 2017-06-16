import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { Employee } from './employee.model';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { Tooltip } from '../tooltip/tooltip.model';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employee_i: Employee;
 
	// @HostListener('mouseenter') onMouseEnter() {
	// 	new TooltipComponent();
	// }
  
  constructor() {}


  ngOnInit() {
    //console.log('XXX: ' + this.employee_i.businessentityid);
    //créeme un nuevo tooltip modelo y dígale cuál business entity id soy
    //new Tooltip(this.employee_i.businessentityid);
  }


}
