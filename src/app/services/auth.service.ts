import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private user: { email: string } | null = null;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('URL_SERVICIOS_MONGODB', { email, password });
  }

  logout(): void {
    this.isAuthenticated = false;
    this.user = null;
  }

  getUser(): { email: string } | null {
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
