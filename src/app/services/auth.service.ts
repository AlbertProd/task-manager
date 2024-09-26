import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-backend-api.com/auth';

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
