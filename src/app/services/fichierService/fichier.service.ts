import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fichier} from "../../model/Fichier";

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  constructor(private _http: HttpClient) { }

  AddExerciceFiles(id:number, file:FormData){
    return this._http.post<Fichier>("http://localhost:8081/Elearning/exercice/"+id, file);
  }
}
