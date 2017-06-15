import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../employee/employee.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Tooltip } from '../tooltip/tooltip.model';

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
  

  constructor(private http: Http) { }

  ngOnInit() {
    this.employees = [];

    this.http.request(this.apiUrl).subscribe((res: Response) => {
      this.data = res.json();

      var rows = this.data['restify']['rows'];

      for(var i = 0; i < rows.length; i += 1) { 
        var businessentityid = rows[i]["values"]["businessentityid"]["value"];
        var nationalidnumber = rows[i]["values"]["nationalidnumber"]["value"];
        var loginid = rows[i]["values"]["loginid"]["value"];
        var jobtitle = rows[i]["values"]["jobtitle"]["value"];    
        var birthdate = rows[i]["values"]["birthdate"]["value"];
        var maritalstatus = rows[i]["values"]["maritalstatus"]["value"];
        var gender = rows[i]["values"]["gender"]["value"];    
        var hiredate = rows[i]["values"]["hiredate"]["value"];
        var salariedflag = rows[i]["values"]["salariedflag"]["value"];
        var vacationhours = rows[i]["values"]["vacationhours"]["value"];    
        var sickleavehours = rows[i]["values"]["sickleavehours"]["value"];
        var currentflag = rows[i]["values"]["currentflag"]["value"];
        var rowguid = rows[i]["values"]["rowguid"]["value"];
        var modifieddate = rows[i]["values"]["modifieddate"]["value"];
        var organizationnode = rows[i]["values"]["organizationnode"]["value"];

        var vacationDays = (parseInt(vacationhours) / 8);
        var vacationHoursRemainder = +vacationhours % 8;


        //this.employees.push(new Employee(rows[i]));        
        this.employees.push(new Employee(
          businessentityid, 
          nationalidnumber,
          loginid,
          jobtitle,
          birthdate,
          maritalstatus,
          gender,
          hiredate,
          salariedflag,
          vacationhours,
          sickleavehours,
          currentflag,
          rowguid,
          modifieddate,
          organizationnode,
          vacationDays,
          vacationHoursRemainder));        
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
