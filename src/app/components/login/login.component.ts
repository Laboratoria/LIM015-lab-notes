import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  user={
    email: '',
    password: '',
  }

  LogIn(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.login(email, password).then(res =>{
      console.log('Create user succesfull', res);
      this.router.navigateByUrl('/home');
    })
  }

  LogInGoogle(){
    this.authService.loginWithGoogle().then((userCredential:any) => {
      // console.log('userCredential--->',userCredential); //see userCredential.aditionalUserInfo
      console.log(userCredential.additionalUserInfo.profile);
      this.router.navigateByUrl('/home');
    })
  }

}
