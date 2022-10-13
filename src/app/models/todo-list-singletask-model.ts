//class that describes a single task

export class singletask{
    private _parentid:string;
   private _taskname:string;
   private _taskdescription:string;
   private _status : boolean;

   constructor(id:string, name:string, description:string, status:boolean)
   {
       this._parentid =id;
       this._taskname =name;
       this._taskdescription=description;
       this._status = status;
       
   
   }


    /**
     * Getter parentid
     * @return {string}
     */
	public get parentid(): string {
		return this._parentid;
	}

    /**
     * Getter taskname
     * @return {string}
     */
	public get taskname(): string {
		return this._taskname;
	}

    /**
     * Getter taskdescription
     * @return {string}
     */
	public get taskdescription(): string {
		return this._taskdescription;
	}

    /**
     * Getter status
     * @return {boolean}
     */
	public get status(): boolean {
		return this._status;
	}

    /**
     * Setter parentid
     * @param {string} value
     */
	public set parentid(value: string) {
		this._parentid = value;
	}

    /**
     * Setter taskname
     * @param {string} value
     */
	public set taskname(value: string) {
		this._taskname = value;
	}

    /**
     * Setter taskdescription
     * @param {string} value
     */
	public set taskdescription(value: string) {
		this._taskdescription = value;
	}

    /**
     * Setter status
     * @param {boolean} value
     */
	public set status(value: boolean) {
		this._status = value;
	}
   



}