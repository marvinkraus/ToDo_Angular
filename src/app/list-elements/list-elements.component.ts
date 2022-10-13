import { Component, OnInit , Input} from '@angular/core';
import { TodoListType } from 'app/types/todo-list.type';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  @Input() currentList?: TodoListType;
  constructor() { }

  ngOnInit(): void {
  }

}
