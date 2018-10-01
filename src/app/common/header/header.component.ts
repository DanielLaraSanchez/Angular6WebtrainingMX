import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AfterLoginActionService } from '../services/after-login-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isModalActive = false;

  constructor(public _authService: AuthenticationService, public _afterLoginService: AfterLoginActionService) { }

  ngOnInit() {
    this._afterLoginService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();
      }
    );
  }

  toggleModal(){
    this.isModalActive = !this.isModalActive;
  }

}
