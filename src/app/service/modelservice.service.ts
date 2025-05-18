import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home } from '../interface/home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelserviceService {

  url:string="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  getModel(id:number):Observable<Home>{
    return this.http.get<Home>(this.url+id);
  }

  deleteModel(id:number){
    return this.http.delete(this.url+id);
  }

  addModel(model:Home):Observable<Home>{
    return this.http.post<Home>(this.url,model);
  }

  updateModel(model:Home):Observable<Home>{
    return this.http.post<Home>(this.url,model);
  }

  getAllModel():Observable<Home[]>{
    return this.http.get<Home[]>(this.url);
  }

}
