import { Component, OnInit , Input} from '@angular/core';
import { TodoListModel } from 'app/models/todo-list.model';
import { TodoListType } from 'app/types/todo-list.type';
import { RestService } from 'app/service/rest.service';
import { todoListElements } from 'app/models/todo-list-elements.model';
import { singletask } from 'app/models/todo-list-singletask-model';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  @Input() currentList?: TodoListModel;

  public testdetails: singletask = new singletask("123", "Hilve", "gds", false);
  public testelements: todoListElements = new todoListElements("123", [this.testdetails]);

  constructor(private rest: RestService) { }
  


  ngOnInit(): void {

    //let test2:TodoListModel = this.rest.getSingle("28773d14-664d-45a5-b746-a360b99007be");

    let test:TodoListModel = new TodoListModel("test", "test2");
    this.currentList = test;

    
    
   
  }

  //TODO: returns single list with the parentid 
  /*getSingle():void{
    this.rest.getSingle().subscribe({
      next: (value) => {
        this.list = this.converter.convertList(value);
        this.selectedList = this.list[0];

      } , 
      error : (error) => {
        console.log(error)
      }
    });
  }*/

}
