import { ConnectConfig } from "rxjs";

export class TodoListModel {
    private _id: string;
    private _name: string;

    constructor(name:string, id:string)
    {
        this._name = name;
        this._id = id;
    }

    get id(): string|undefined{
        return this.id;
    }

    get name():string {
        return this._name;
    }



}
