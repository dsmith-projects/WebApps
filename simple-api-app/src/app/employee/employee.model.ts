export class Employee{
	businessentityid: string;
	nationalidnumber: string;
	loginid: string;
	jobtitle: string;
	birthdate: string;
	maritalstatus: string;
	gender: string;
	hiredate: string;
	salariedflag: string;
	vacationhours: string;
	sickleavehours: string;
	currentflag: string;
	rowguid: string;
	modifieddate: string;
	organizationnode: string;


	constructor (obj?: any) {
		this.businessentityid = obj["values"]["businessentityid"]["value"];		
		this.nationalidnumber = obj["values"]["nationalidnumber"]["value"];
		this.loginid = obj["values"]["loginid"]["value"];
		this.jobtitle = obj["values"]["jobtitle"]["value"];		
		this.birthdate = obj["values"]["birthdate"]["value"];
		this.maritalstatus = obj["values"]["maritalstatus"]["value"];
		this.gender = obj["values"]["gender"]["value"];		
		this.hiredate = obj["values"]["hiredate"]["value"];
		this.salariedflag = obj["values"]["salariedflag"]["value"];
		this.vacationhours = obj["values"]["vacationhours"]["value"];		
		this.sickleavehours = obj["values"]["sickleavehours"]["value"];
		this.currentflag = obj["values"]["currentflag"]["value"];
		this.rowguid = obj["values"]["rowguid"]["value"];
		this.modifieddate = obj["values"]["modifieddate"]["value"];
		this.organizationnode = obj["values"]["organizationnode"]["value"];
		//console.log(this.businessentityid + ' ' + this.nationalidnumber + ' ' + this.loginid + ' ' + this.jobtitle + ' ' + this.birthdate + ' ' + this.gender + ' ' + this.hiredate + ' ' + this.salariedflag + ' ' + this.vacationhours + ' ' + this.sickleavehours + ' ' + this.currentflag + ' ' + this.rowguid + ' ' + this.modifieddate + ' ' + this.organizationnode);
	}
}