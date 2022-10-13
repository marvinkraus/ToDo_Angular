import { Component, OnInit } from '@angular/core';
import { TodoListType } from 'app/types/todo-list.type';
import { TodoListModel } from '../models/todo-list.model';
import { ConverterListService } from '../service/converter-list.service';
import { RestService } from '../service/rest.service';


@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {

  public list: TodoListModel[] = []; 
  
  public name: string ="";
  public selectedList:TodoListModel = new TodoListModel("f","f");
  

  constructor(private rest: RestService, private converter: ConverterListService) {

   }

   
  ngOnInit(): void {
    this.getOverview();
  }

  getOverview():void{
    this.rest.getAll().subscribe({
      next: (value) => {
        this.list = this.converter.convertList(value);
        this.selectedList = this.list[0];

      } , 
      error : (error) => {
        console.log(error)
      }
    });
  }

  createList(name:string):void{
    this.rest.createList(name);
    this.getOverview();
    console.log(name);
  }

  assignSelected(selected:TodoListModel)
  {
    console.log(selected);
    this.selectedList = selected;
  }

}
