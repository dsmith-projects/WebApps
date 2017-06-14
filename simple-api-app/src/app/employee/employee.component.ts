import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PaginationComponent } from '../pagination/pagination.component';
import { Employee } from './employee.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { Tooltip } from '../tooltip/tooltip.model';

@Component({
  selector: '[app-employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employee: Employee;
  @Output() onTooltipSelected: EventEmitter<Tooltip>;
  private currentTooltip: Tooltip;
	// @HostListener('mouseenter') onMouseEnter() {
	// 	new TooltipComponent();
	// }
  employeePayHistory: string = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employeepayhistory/?_view=json&_expand=yes';
  data: Object;
  businessEntitiesArray: string[] = [];
  rateArray: string[] = [];
  rows: string[] = [];


  constructor(private http: Http) { }

  ngOnInit() {
    
  }

  clicked(tooltip: Tooltip): void {
    this.currentTooltip = tooltip;
    this.onTooltipSelected.emit(tooltip);
  }

}
