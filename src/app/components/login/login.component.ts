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
    // console.log(this.user);
    const {email, password} = this.user;
    this.authService.login(email, password).then(userCredential =>{
      console.log(userCredential);
      // this.router.navigateByUrl('/home');
    }).catch((error) => {
      // this.router.navigateByUrl('/login');
      console.log(error);
    })
  }

  LogInGoogle(){
    this.authService.loginWithGoogle().then((userCredential) => {
      // console.log('userCredential--->',userCredential); //see userCredential.aditionalUserInfo
      console.log(userCredential.additionalUserInfo);
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error);
    })
  }

}
