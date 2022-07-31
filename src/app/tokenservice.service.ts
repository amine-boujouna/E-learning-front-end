import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './model/User';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'any'
})
export class TokenserviceService {
  userInfo = new BehaviorSubject(null);

  token!:string;
  userconnected!:string;
  constructor(private http:HttpClient,private router:Router) { }
  login(user:User){
    return this.http.post<User>("http://localhost:8081/Elearning/signin",user,{observe:'response'});
  }
 /* login(credentials): Observable<any> {
    return this.http.post(
       "http://localhost:8081/Elearning/signin",
      {
        username: credentials.username,
        password: credentials.password
      },
      httpOptions
    );
  }
  */
  saveToken(jwt:string){
    localStorage.removeItem('accessToken');
    localStorage.setItem('accessToken',jwt);
    this.token=jwt;
   
  }
  loadToken(){
  localStorage.getItem('accessToken');
  }
  
  getToken():string{
    return this.token;
  }
  saveuserconnected(UC:string){
    localStorage.removeItem('userconnected');
    localStorage.setItem('userconnected',UC);
    this.userconnected=UC;
   
  }
  getUserconnected():string{
    return this.userconnected;
  }
 /* public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  */
  
   logout() {
    window.sessionStorage.clear();
    this.router.navigate(['/acceuil']);
  }
}
