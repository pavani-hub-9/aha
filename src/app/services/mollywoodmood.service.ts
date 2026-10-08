import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mollywoodmood } from '../models/mollywoodmood';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
  private baseurl="assets/mollywoodmood.json"
  constructor(private http:HttpClient){}
  onsubmit():Observable<Mollywoodmood[]>{
    return this.http.get<Mollywoodmood[]>(this.baseurl)
  }
}
