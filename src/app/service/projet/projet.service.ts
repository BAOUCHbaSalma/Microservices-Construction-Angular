import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../../models/global.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";


  public addProjet(projet:Projet){
    return this.http.post(`${this.urlApi}/PROJET-SERVICE/`,projet)
  }
  public findAll():Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.urlApi}/PROJET-SERVICE/projets`)
  }
  public deleteProjet(id:number ){
    return this.http.delete(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`,)
  }
  public updateProjet(id:number ,projet:Projet){
    return this.http.put(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`,projet)
  }
  public findById(id:number){
    return this.http.get(`${this.urlApi}/PROJET-SERVICE/admin/projets/${id}`)
  }

}
