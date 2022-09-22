export namespace main {
	
	export class Result {
	    linked_in: boolean;
	    resume_length: number;
	    measurable: number;
	    hard_skills: string[];
	    soft_skills: string[];
	
	    static createFrom(source: any = {}) {
	        return new Result(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.linked_in = source["linked_in"];
	        this.resume_length = source["resume_length"];
	        this.measurable = source["measurable"];
	        this.hard_skills = source["hard_skills"];
	        this.soft_skills = source["soft_skills"];
	    }
	}

}

