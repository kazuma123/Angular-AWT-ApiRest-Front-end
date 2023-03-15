import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private baseEndpoint = 'http://localhost:8080/api/tipo_documento'

  private cabecera: HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  public ver(id: number): Observable<TipoDocumento> {
    return this.http.get<TipoDocumento>(`${this.baseEndpoint}/${id}`);
  }

  public listar(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(this.baseEndpoint);
  }

  public crear(tipo_documento: TipoDocumento): Observable<TipoDocumento>{
    return this.http.post<TipoDocumento>(this.baseEndpoint, tipo_documento, {
      headers: this.cabecera
    })
  }

  public editar(tipo_documento: TipoDocumento): Observable<TipoDocumento>{
    return this.http.put<TipoDocumento>(`${this.baseEndpoint}/${tipo_documento.idTipoDocumento}`, tipo_documento, {
      headers: this.cabecera
    })
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`)
  }
}
