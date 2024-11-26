import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://98.84.223.55/api/auth/cita'; 

  constructor(private http: HttpClient) {}

  
  crearCita(cita: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, cita);
  }
}
