import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { TodoListModel } from '../models/todo-list.model';
import { TodoListType } from '../types/todo-list.type';
import { PathService } from './path.service';



//Decorator
@Injectable({
  providedIn: 'root'
})
export class RestSingleService {

  private baseURL:string;
  private nachname:string;
  

  constructor(private http: HttpClient, private path: PathService) { 
    this.baseURL = environment.baseURL;
    this.nachname = environment.nachname;

  }

 
  //return werte ist ein observable und er braucht die spezifik von <any>
  getSingle(parentID:string): Observable<any>{
    let url: string = this.path.join(this.baseURL, this.nachname, parentID);
    return this.http.get(url, {});
  }

  //post (parent_id(uni),["task1" : teast])

  
  /*createList(name:string): Observable<any> {
    let url: string = this.path.join(this.baseURL, this.nachname);
    let body = JSON.stringify({name: name});
    
    return this.http.post(url, body, {});

  }*/

  //TODO getSingle(id:string):Observab (this.singleURL, this.iD)
}
