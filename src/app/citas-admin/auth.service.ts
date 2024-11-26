import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://98.84.223.55/api/auth/citas'; 
  private apiUrlEditCita='http://98.84.223.55/api/auth/editarCita';
  private apiUrlDeleteCita='http://98.84.223.55/api/auth/eliminarCita';


  constructor(private http: HttpClient) {}

  obtenerCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  editarCita(id: string, datos: any): Observable<any> {
    return this.http.put(`${this.apiUrlEditCita}/${id}`, datos);
  }
  
  eliminarCita(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrlDeleteCita}/${id}`);
  }
  
}
