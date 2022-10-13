import { Component, OnInit, Input } from '@angular/core';
import { singletask } from 'app/models/todo-list-singletask-model';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  constructor() { }

 

  @Input() currentTask?: singletask;

  ngOnInit(): void {
  }



}
