import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Result } from '../result-module/result-module.model';

@Component({
  selector: 'app-api-module',
  templateUrl: './api-module.component.html',
  styleUrls: ['./api-module.component.css']
})


export class ApiModuleComponent implements OnInit {
	results: Result[];
	data: Object;
	loading: boolean;

  constructor(private http: Http) { 
  }

  ngOnInit() {
  }

  processApi(): void {	

  	this.loading = true;
  	this.http.request('http://gap-adventureworks.us-west-2.elasticbeanstalk.com/Human+Resources/department/?_view=json&_expand=yes')
  	.subscribe((res: Response) => {
  		this.data = res.json();
  		var rows = this.data["restify"]["rows"];
  		console.log(rows);

  		this.results = [];
  		var departmentid = " ";
  		var name = " ";
  		var groupname = " ";
  		var modifieddate = " ";

  		for(var i = 0; i < rows.length; i += 1) {
	  		//console.log(departmentid + " " + name + " " + groupname + " " + modifieddate);
	  		this.results.push(new Result(rows[i]));
	  		//console.log(rows[i]);
	  	}
  		this.loading = false;
  	});
  	 	
  }



}
