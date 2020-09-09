import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: String = 'http://localhost:8000/'

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getMember(id: number): Observable<any> {
    return this.http.get(
      this.baseUrl + 'members/' + id + '/',
      {
        headers: this.httpHeaders
      }
    )
  }
}
