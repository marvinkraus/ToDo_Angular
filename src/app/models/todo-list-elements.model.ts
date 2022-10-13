//class that describes a single todolist

import { singletask } from "./todo-list-singletask-model";

export class todoListElements{
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