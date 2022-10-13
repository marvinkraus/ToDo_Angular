import { Component, OnInit } from '@angular/core';
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

  constructor(private rest: RestService, private converter: ConverterListService) {

   }

  ngOnInit(): void {
    this.getOverview();
  }

  getOverview():void{
    this.rest.getAll().subscribe({
      next: (value) => {
        this.list = this.converter.convertList(value);
      } , 
      error : (error) => {
        console.log(error)
      }
    });
  }

}
