import { Injectable } from '@angular/core';
import { Nenenanine } from '../models/nenenanine';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NenenanineService {
private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Nenenanine[]>{
    return this.http.get<Nenenanine[]>(this.baseurl);
  }
}
