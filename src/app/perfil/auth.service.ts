import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://98.84.223.55/api/auth/citas'; // Cambia esta URL según tu configuración

  constructor(private http: HttpClient) {}

  // Método para obtener todas las citas
  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
