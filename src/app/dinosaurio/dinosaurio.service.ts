import { Injectable } from '@angular/core';
import { Dinosaurio } from './dinosaurio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {

  private apiUrl: string = environment.baseUrl + 'books';


  constructor(private http: HttpClient) { }

  getDinosaurios(): Observable<Dinosaurio[]> {
    return this.http.get<Dinosaurio[]>(this.apiUrl);
  }
  }