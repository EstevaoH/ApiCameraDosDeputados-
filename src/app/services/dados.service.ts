import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deputados } from '../models/deputados';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private URL = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

  constructor(private http: HttpClient) { }

  dados(): Observable<Deputados[]>{
    return this.http.get<Deputados[]>(this.URL);
  }

}
