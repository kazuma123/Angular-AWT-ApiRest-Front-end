import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Entidad } from '../models/entidad';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private baseEndpoint = 'http://localhost:8080/api/entidad'

  private cabecera: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  public ver(id: number): Observable<Entidad> {
    return this.http.get<Entidad>(`${this.baseEndpoint}/${id}`);
  }

  public listar(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.baseEndpoint);
  }

  public crear(entidad: Entidad): Observable<Entidad>{
    return this.http.post<Entidad>(this.baseEndpoint, entidad, {
      headers: this.cabecera
    })
  }

  public editar(entidad: Entidad): Observable<Entidad>{
    return this.http.put<Entidad>(`${this.baseEndpoint}/${entidad.idEntidad}`, entidad, {
      headers: this.cabecera
    })
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`)
  }

}
