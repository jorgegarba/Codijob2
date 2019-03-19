import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private _http:HttpClient) { }
  getAll():Observable<any>{
    let url = "http://localhost:3700/api/skill/getall";
    return this._http.get(url);
  }
}
