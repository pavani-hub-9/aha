import { Injectable } from '@angular/core';
import { Inthespotlight } from '../models/inthespotlight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Inthespotlight[]>{
    return this.http.get<Inthespotlight[]>(this.baseurl);
  }
}
