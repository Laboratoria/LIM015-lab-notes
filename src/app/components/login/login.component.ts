import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  user={
    email: '',
    password: '',
  }

  // LogIn(){
  //   console.log(this.user);
  //   const {email, password} = this.user;
  //   this.authService.login(email, password).then(res =>{
  //     console.log('Create user succesfull', res);
  //   })
  // }

  LogInGoogle(){
    console.log(this.user);
    this.authService.loginWithGoogle().then(res =>{
      console.log('Create user succesfull', res);
    })
  }

}
