import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fantasicfafa } from '../models/fantasicfafa';

@Injectable({
  providedIn: 'root'
})
export class FantasicfafaService {
private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Fantasicfafa[]>{
    return this.http.get<Fantasicfafa[]>(this.baseurl);
  }
}
