import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private url = "http://localhost:3000/";
  
  constructor(private http: HttpClient) { 
  }

  getDestinations(){
    return this.http.get<any[]>(`${this.url}destinations`);
  }

  getExperiences(){
    return this.http.get<any[]>(`${this.url}destinations/expiriences`);
  }

  getFligths(){
    return this.http.get<any[]>(`${this.url}fligths`);
  }


  
 
  
}
