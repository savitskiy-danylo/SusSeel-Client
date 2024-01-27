import { Injectable, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit
{
  constructor (private SocialAuthService: SocialAuthService) { }
  ngOnInit(): void
  {

  }

  private tryGetUser(): void
  {
    this.user = JSON.parse(localStorage.getItem('authUser'));
    this.authToken = this.user?.authToken;
  }

  private authToken: string | null = null;
  private user: SocialUser | null = null;

  setAuthState(user: SocialUser): void
  {
    this.authToken = user.authToken;
    this.user = user;
    localStorage.setItem('authUser', JSON.stringify(user));
  }

  getAuthToken(): string | null
  {
    if (this.authToken == null)
      this.tryGetUser();
    return this.authToken;
  }

  clearAuthState(): void
  {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('authUser');
  }

  getUser(): SocialUser | null
  {
    if (this.user == null)
      this.tryGetUser();
    return this.user;
  }

  isLogged(): boolean
  {
    this.tryGetUser();
    return this.user != null;
  }
}
