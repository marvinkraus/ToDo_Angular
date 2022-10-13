import { Component, OnInit , Input} from '@angular/core';
import { TodoListModel } from 'app/models/todo-list.model';
import { TodoListType } from 'app/types/todo-list.type';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  @Input() currentList?: TodoListModel;
  constructor() { }



  ngOnInit(): void {

    let test:TodoListModel = new TodoListModel("test", "test2")
    this.currentList = test;
  }

}
