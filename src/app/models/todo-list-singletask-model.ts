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
       this._status = status
       
   
   }



}