import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http:HttpClient,private jwtHelper: JwtHelperService, private router: Router) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('http://localhost:3000/users/register', user,{headers: headers});
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('http://localhost:3000/users/authenticate', user,{headers: headers});
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    // console.log(this.jwtHelper.isTokenExpired());
    return !this.jwtHelper.isTokenExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
