import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../employee/employee.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
	employees: Employee[];
	data: Object;
	
  apiUrl: string = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employee/?_view=json&_expand=yes';
  next: string;
  previous: string;
  isNext: boolean = false;
  isPrevious: boolean  = false;

  employeePayHistory: string;

  constructor(private http: Http) { }

  ngOnInit() {
    
    this.employeePayHistory = 'http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/employeepayhistory/?_view=json&_expand=yes';

    this.employees = [];
    
    this.http.request(this.apiUrl).subscribe((res: Response) => {
      this.data = res.json();

      var rows = this.data['restify']['rows'];

      for(var i = 0; i < rows.length; i += 1) {        
        this.employees.push(new Employee(rows[i]));        
      }


      if(this.next === undefined) {
        try {
          this.next = this.data['restify']['nextPage']['href'];
          this.isNext = true;
          //console.error("Siempre pasó por acá, o sea, siempre this.next fue: " + this.next);
        } catch(err) {
          this.isNext = false;          
          //console.error("Error del if (Next): " + err);
        }
      } else {
        try {
          this.next = this.data['restify']['nextPage']['href'];
          this.isNext = true;
        } catch(err) {
          this.isNext = false;          
          //console.error("Error del else (Next): " + err);
        }
      } 

      //console.log("this.previous: " + this.previous);
      if(this.previous === undefined) {
        //console.log("Sí es undefined: ");
        try {
          this.previous = this.data['restify']['previousPage']['href'];
          this.isPrevious = true; 
        } catch(err) {
          this.isPrevious = false;
          console.error("Error del if - catch (Previous): " + err);          
        }    
      } else {
        try {
          this.previous = this.data['restify']['previousPage']['href'];
          this.isPrevious = true; 
        } catch(err) {
          this.isPrevious = false;
          this.previous = this.apiUrl;
          console.error("Error del else - catch (Previous): " + err);
        }    
      }      
      
    });

  }

  

  nextPage(): void {
    if(this.isNext) {
      this.apiUrl = this.next;  
      this.ngOnInit();

    }
  }

  previousPage(): void {
    if(this.isPrevious) {
      this.apiUrl = this.previous;
      this.ngOnInit();    
    }    
    
  }

}
