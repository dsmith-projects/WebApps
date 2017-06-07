import { Component, OnInit, Input } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { Employee } from './employee.model';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
	@Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
