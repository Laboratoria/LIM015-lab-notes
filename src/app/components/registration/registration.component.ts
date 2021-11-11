import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,
              public router: Router) { }

  ngOnInit(): void {
  }
  user={
    name: '',
    lastName: '',
    email: '',
    password: '',
  }

  register() {
    console.log(this.user);
    const { email, password, name, lastName } = this.user;
    this.authService.register(email, password).then((userCredential: any) => {
      console.log(userCredential);
      const newUser = userCredential.additionalUserInfo.isNewUser;
      if (newUser) {
        const idUser = userCredential.user.uid;
        // asigno values a sus Keys
        const infoUser = {
          uid: idUser,
          name: name,
          lastName: lastName,
          fullName: name + ' ' + lastName,
          photo: 'https://firebasestorage.googleapis.com/v0/b/bitzy-notes.appspot.com/o/icon_user.png?alt=media&token=cb10b199-16c8-4286-8a8a-ff41152ebd9e',
          email: email
        };
        // guardo la info de la cuenta de google
        // this.firestoreService.saveInfoGoogle(infoUser);
        // this.authService.userNotLogged();
        // this.router.navigate(['/login']);
        // this.router.navigateByUrl('/login');
        this.firestoreService.saveInfoUser(infoUser);
        console.log('Create user succesfull', userCredential)
      }
      this.router.navigate(['/login']);
    });
  }
}