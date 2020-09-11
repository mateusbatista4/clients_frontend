import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: String = 'http://localhost:8000/'
  token= 'Token 8e259dea0a7ca256d7d7381e2a8e0cbcda27dc10';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Authorization',this.token);

  constructor(private http: HttpClient) { }


  getMember(id: number): Observable<any> {
    return this.http.get(
      this.baseUrl + 'members/' + id + '/',
      {
        headers: this.httpHeaders
      }
    )
  }
  updateMember(member): Observable<any> {
    let body = { name: member.name, surname: member.surname, phone: member.phone , email: member.email}
    return this.http.put(
      this.baseUrl + 'members/' + member.id + '/',
      body,
      {
        headers: this.httpHeaders
      }
    )
  }
  deleteMember(memberId) {
    return this.http.delete(
      this.baseUrl + 'members/' + memberId + '/',
      {
        headers: this.httpHeaders
      }
    )
  }
}
