import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee/employee.model';
import { Tooltip } from '../tooltip/tooltip.model';


@Component({
  selector: '[app-employee-row]',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.css']
})
export class EmployeeRowComponent implements OnInit {
  @Input() employee_r: Employee;
  @Output() onEmployeeSelected: EventEmitter<Employee>;
  

  constructor() { 
  	this.onEmployeeSelected = new EventEmitter();
  }


  ngOnInit() {
  }

}
