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
  data: Object;
  employeePayHistory: string = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employeepayhistory/?_view=json&_expand=yes';
  currentRate: string; 

  constructor(private http: Http) {   	
  }

  ngOnChanges() {

    this.http.request(this.employeePayHistory).subscribe((res: Response) => {
      this.data = res.json();

      var rows = this.data['restify']['rows'];

      for(var i = 0; i < rows.length; i += 1) {
        console.log(this.employee_tt.businessentityid);   
        if(this.employee_tt.businessentityid === rows[i]['values']['businessentityid']['value']) {
          console.log("Soy employee TT " + this.employee_tt.businessentityid); 
          console.log('Rate: ' + rows[i]['values']['rate']['value']);
          this.currentRate = rows[i]['values']['rate']['value'];
          break;
        }            
      }   

    });
  }

  ngOnInit() {

    
  }


}
