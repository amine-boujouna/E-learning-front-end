import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 
  constructor(private http: HttpClient) { }
  baseUrl="http://localhost:8081/Elearning/resetpassword/{email}/{newpass}/{cofirm}";
  findalluser():Observable<any> {
    return this.http.get("http://localhost:8081/Elearning/all");
  }
  
 /* signup(user:User):Observable<any>{
    return this.http.post<User>("http://localhost:8081/Elearning/add",user),httpOptions;
    }*/
    signup(user): Observable<any> {
      return this.http.post(
        "http://localhost:8081/Elearning/add",
        {
          username: user.username,
          password: user.password,
          profession:user.profession,
          firstname:user.firstname,
	        lastname:user.lastname,
          email:user.email,
	        datenaissance:user.datenaissance,
        	phone:user.phone,
	        sexe:user.sexe,
	        confirmepassword:user.confirmepassword
        },
        httpOptions
      );
    }
  ResetPassword(email:string,newpass:string,cofirm:string){
    return this.http.post(`${this.baseUrl}` + `/create`, {email,newpass,cofirm})
  }
  Activecompte(username:string){
    return this.http.put<User>('http://localhost:8081/Elearning/activecompte/'+username,username);
  }
}
