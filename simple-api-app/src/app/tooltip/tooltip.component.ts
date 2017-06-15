import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Tooltip } from './tooltip.model';
import { Employee } from '../employee/employee.model';

@Component({
  selector: '[app-tooltip]',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  //@Input() businessentityid: number; 
  @Input() employee: Employee; 
  data: Object;
  employeePayHistory: string = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employeepayhistory/?_view=json&_expand=yes';

  constructor(private http: Http) {   	
  }

  ngOnInit() {

    this.http.request(this.employeePayHistory).subscribe((res: Response) => {
      this.data = res.json();

      var rows = this.data['restify']['rows'];
      for(var i = 0; i < rows.length; i += 1) {        
        console.log(this.employee);              
      }   

    });
  }

  productWasSelected(tooltip: Tooltip): void {
	console.log('Employee clicked: ', tooltip);
  }

}
