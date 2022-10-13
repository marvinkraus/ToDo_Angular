import { singletask } from "./todo-list-singletask-model";

export class todoListDetails{
    private _parentid:string;
    private _alletasks :singletask[];

    constructor(id:string, alltasks:singletask[])
    {
        this._parentid = id;
        this._alletasks = alltasks
    
    }

    get id(): string|undefined{
        return this._parentid;
    }

  
    get alltasks():singletask[]{
        return this._alletasks
    }



   
}