import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoListModel } from '../models/todo-list.model';
import { TodoListType } from '../types/todo-list.type';
import { PathService } from './path.service';



//Decorator
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseURL:string;
  private nachname:string;

  constructor(private http: HttpClient, private path: PathService) { 
    this.baseURL = environment.baseURL;
    this.nachname = environment.nachname;

  }

 
  //return werte ist ein observable und er braucht die spezifik von <any>
  getAll(): Observable<any>{
    let url: string = this.path.join(this.baseURL, this.nachname);

    return this.http.get(url, {});
  }

  createList(name:string): Observable<any> {
    let url: string = this.path.join(this.baseURL, this.nachname);
    let body = JSON.stringify({name: name});
    
    return this.http.post(url, body, {});

  }
}
