import { Injectable } from '@angular/core';
import { TodoListModel } from '../models/todo-list.model';
import { TodoListType } from '../types/todo-list.type';
import { TodoListListType } from '../types/todo-list-list-type';



@Injectable({
  providedIn: 'root'
})
export class ConverterListService {

  constructor() { }

  public convertList(listJson: TodoListListType):TodoListModel[]{ 
  
    let list:TodoListModel[] = [];

    listJson.items.forEach((value: TodoListType) =>{
      let todoListModule = new TodoListModel(value.name, value.id);
      list.push(todoListModule);

    });

    return list;


  }
}
