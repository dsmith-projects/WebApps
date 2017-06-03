import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Result } from '../result-module/result-module.model';

@Component({
  selector: 'app-api-module',
  templateUrl: './api-module.component.html',
  styleUrls: ['./api-module.component.css']
})


export class ApiModuleComponent implements OnInit {
	//results: Result[];
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
  		this.loading = false;
  	});

  	//var body = JSON.parse(this.data['_body']);
  	//var body = this.data["restify"];
  	//this.results = [];
  	//var body = this.api_url['body'];
  	//console.log(this.data["restify"]);
  	//console.log(this.data["restify"]);
  	//console.log(typeof(this.data)); 
  	console.log(this.data);  	
  }



}
