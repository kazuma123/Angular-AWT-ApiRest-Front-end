import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(creds:Usuario){
    return this.http.post("http://localhost:8080/login", creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization');
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);
      this.loggedIn.next(true);
      return body;

    }))
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
