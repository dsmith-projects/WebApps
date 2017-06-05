export class Result{
	departmentid: string;
	name: string;
	groupname: string;
	modifieddate: string;


	constructor (obj?: any) {
		this.departmentid = obj["values"]["departmentid"]["value"];		
		this.name = obj["values"]["name"]["value"];
		this.groupname = obj["values"]["groupname"]["value"];
		this.modifieddate = obj["values"]["modifieddate"]["value"];
		//console.log(this.departmentid + " " + this.name + " " + this.groupname + " " + this.modifieddate);
	}
}