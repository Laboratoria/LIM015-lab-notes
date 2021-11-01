import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  user={
    name: '',
    email: '',
    password: '',
  }

  register(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.register(email, password).then(res =>{
      console.log('Create user succesfull', res)
    })
  }

}
