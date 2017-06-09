import { Component, OnInit, Input, Directive } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { Employee } from './employee.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


@Directive({
	selector: '[tooltip]'
})

export class EmployeeComponent implements OnInit {
	@Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
