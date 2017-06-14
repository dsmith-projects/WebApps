export class Tooltip {
	businessentityid: string;
	ratechangedate: string;
	rate: string;	
	payfrequency: string;	
	modifieddate: string;

	constructor(obj?: string[]) {

		var cont: number = 0;

		//for(var i = 0; i < obj.length; i += 1) {
			this.businessentityid = obj[0]["values"]["businessentityid"]["value"];	
			console.log("businessentityid: " + this.businessentityid);	
			this.ratechangedate = obj[cont]["values"]["ratechangedate"]["value"];
			this.rate = obj[cont]["values"]["rate"]["value"];		
			this.payfrequency = obj[cont]["values"]["payfrequency"]["value"];
			this.modifieddate = obj[cont]["values"]["modifieddate"]["value"];
	    //}
	}
}