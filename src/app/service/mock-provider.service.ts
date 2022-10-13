import { Injectable } from '@angular/core';
import { TaskList } from 'app/mock-data';
import { singletask } from 'app/models/todo-list-singletask-model';
import { Observable, of } from 'rxjs';

//mocks a service that returns the const of all tasks
@Injectable({
  providedIn: 'root'
})
export class MockProviderService {

  constructor() { }

  getall():Observable<singletask[]>{
    const elements = of(TaskList);
    return elements;
  }


}
