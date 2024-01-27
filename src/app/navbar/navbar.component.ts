import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  visible: boolean = false;

  constructor (private authService: AuthService, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void
  {
    this.socialAuthService.authState.subscribe((user) =>
    {
      this.authService.setAuthState(user);
      this.visible = false;
    });
  }

  ShowDialog(): void
  {
    this.visible = true;
  }

  isLogged(): boolean
  {
    return this.authService.isLogged();
  }
  clearUser(): void
  {
    this.authService.clearAuthState();
  }
}
