import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
	employees: Employee[];
	data: Object;
	loading: boolean;
  apiUrl: string = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employee/?_view=json&_expand=yes';
  next: string;
  previous: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }
  processApi(): void {	

  	this.loading = true;
  	this.http.request(this.apiUrl)
  	.subscribe((res: Response) => {
  		this.data = res.json();
      this.employees = []; 

  		this.next = this.data['restify']['nextPage']['href'];
      if(this.previous !== undefined) {
        this.previous = this.data['restify']['previousPage']['href']; 
      } else {
        this.previous = this.apiUrl;
      }
      
      console.log('this.previous: ' + this.previous);

  		var rows = this.data['restify']['rows'];

  		for(var i = 0; i < rows.length; i += 1) {	  		
	  		this.employees.push(new Employee(rows[i]));	  		
	  	}
  		this.loading = false;
  	});
  	 	
  }

  nextPage(): void {
    if(this.next !== undefined) {
      this.apiUrl = this.next;      
      //this.previous = this.data['restify']['previousPage']['href'];
      this.processApi();

    }
  }

  previousPage(): void {
    if(this.previous !== undefined) {
      this.apiUrl = this.previous;
      this.processApi();    
    }    
    
  }

}
