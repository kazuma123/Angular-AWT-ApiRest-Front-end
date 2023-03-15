import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoContribuyente } from '../models/tipo-contribuyente';

@Injectable({
  providedIn: 'root'
})
export class TipoContribuyenteService {

  private baseEndpoint = 'http://localhost:8080/api/tipo_contribuyente'

  private cabecera: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  public ver(id: number): Observable<TipoContribuyente> {
    return this.http.get<TipoContribuyente>(`${this.baseEndpoint}/${id}`);
  }

  public listar(): Observable<TipoContribuyente[]> {
    return this.http.get<TipoContribuyente[]>(this.baseEndpoint);
  }

  public crear(tipo_documento: TipoContribuyente): Observable<TipoContribuyente>{
    return this.http.post<TipoContribuyente>(this.baseEndpoint, tipo_documento, {
      headers: this.cabecera
    })
  }

  public editar(tipo_documento: TipoContribuyente): Observable<TipoContribuyente>{
    return this.http.put<TipoContribuyente>(`${this.baseEndpoint}/${tipo_documento.idTipoContribuyente}`, tipo_documento, {
      headers: this.cabecera
    })
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`)
  }
}
