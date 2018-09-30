import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/services/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = {
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda'
  };

  constructor(public _authentificationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();

    console.log('>>send POST request with form')
    this._authentificationService.login(this.user.email, this.user.password).subscribe(
      (data) =>{
        console.log(data)
      },
      error =>
        console.log(error),
        () => {
          
        }

    )
  }
}
