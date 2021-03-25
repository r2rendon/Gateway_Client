import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private url = "https://localhost:4500";
  
  constructor(private http: HttpClient) { }
}
