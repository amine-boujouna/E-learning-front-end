import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chapitre} from "../../model/Chapitre";


@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private _http:HttpClient) { }



  addChapitre(c:Chapitre):Observable<Chapitre>{
    return this._http.post<Chapitre>("http://localhost:8081/Elearning/chapitre",c);
  }

  update(c:Chapitre){
    return this._http.put<Chapitre>("http://localhost:8081/Elearning/chapitre",c);
  }

  removeChapitre(id:number){
    return this._http.delete<Chapitre>("http://localhost:8081/Elearning/chapitre/"+id);
  }
  FindbyId(id:number):Observable<Chapitre>{
    return this._http.get<Chapitre>("http://localhost:8081/Elearning/chapitre/"+id);
  }
  FindAllChapitres():Observable<Chapitre[]>{
    return this._http.get<Chapitre[]>("http://localhost:8081/Elearning/chapitre");
  }
}
