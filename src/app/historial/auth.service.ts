import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://98.84.223.55/api/auth/citas'; 

  constructor(private http: HttpClient) {}

  obtenerCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
