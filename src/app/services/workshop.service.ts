import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  constructor(private http: HttpClient) { 
  }

  getWorkshopMessage(){
    return this.http.get('http://localhost:8080/workshop/message')
  }
}
