import { Component, OnInit , Input} from '@angular/core';
import { TodoListModel } from 'app/models/todo-list.model';
import { TodoListType } from 'app/types/todo-list.type';
import { RestService } from 'app/service/rest.service';
import { todoListElements } from 'app/models/todo-list-elements.model';
import { singletask } from 'app/models/todo-list-singletask-model';
import { TaskList } from 'app/mock-data';
import { MockProviderService } from 'app/service/mock-provider.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  @Input() currentList?: TodoListModel;

  //variable to saved the current selected task
  public selectedTask?:singletask;

  //to use with the single get (parentID)
  private parentID = this.currentList?.id;

  //Placeholder, da wir die Restschnittstelle nicht geschafft hatten
  private tasklist = TaskList;
  

  //if mockservice works this is needed
  //tasks :singletask[] = []
 

  public testelements: todoListElements = new todoListElements("parent-id", this.tasklist);
  constructor(private rest: RestService, private mockservice: MockProviderService) { }
  


  ngOnInit(): void {



    //this.getTasks
   
  }

    
  assignSelected(selected:singletask)
  {
    console.log(selected);
    this.selectedTask = selected;
  }

  /* doesnt work yet
  getTasks():void {
    this.mockservice.getall().subscribe(tasks => this.tasks = tasks)
  }
*/

  //TODO: returns single list with the parentid 
  /*getSingle(this.parentid):void{
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
