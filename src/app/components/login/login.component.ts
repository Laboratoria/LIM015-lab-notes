import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import firebase from '@firebase/app-compat';
import "firebase/auth"
import "firebase/firestore"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,
              public router: Router) { }

  ngOnInit(): void {
    this.authService.userlogged();
  }

  localuid: any | undefined = '';
  verify: any;
  reCaptchaVerifier: any;

  user={
    email: '',
    password: '',
    phone: '',
    code: '',
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
    this.authService.loginWithGoogle().then((userCredential: any) => {
      console.log(userCredential);
      // console.log('userCredential--->',userCredential.user.uid); //see userCredential.aditionalUserInfo
      // console.log(userCredential.additionalUserInfo.profile);
      // console.log(userCredential.user?.uid);
      this.localuid = userCredential.user?.uid;
      localStorage.setItem('localUid', this.localuid)
      const newUser = userCredential.additionalUserInfo?.isNewUser;
      if (newUser) {
        const idUser = userCredential.user.uid;
        const nameUser = userCredential.additionalUserInfo.profile.given_name;
        const lastNameUser = userCredential.additionalUserInfo.profile.family_name;
        const fullNameUser = userCredential.additionalUserInfo.profile.name;
        const photoUser = userCredential.additionalUserInfo.profile.picture;
        const emailUser = userCredential.additionalUserInfo.profile.email;
        // asigno values a sus Keys
        const infoUser = {
          uid: idUser,
          name: nameUser,
          lastName: lastNameUser,
          fullName: fullNameUser,
          photo: photoUser,
          email: emailUser
        };
        // guardo la info de la cuenta de google
        // this.firestoreService.saveInfoGoogle(infoUser);
        this.firestoreService.saveInfoUser(infoUser);
      }
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error);
    })
  }

  loginPhone(){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {size: 'invisible'})
    firebase.auth().signInWithPhoneNumber(this.user.phone, this.reCaptchaVerifier).then((result) => {
      console.log(result);
      console.log(result.verificationId);
      localStorage.setItem('verificationId', result.verificationId)
      localStorage.setItem('userPhone', this.user.phone)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  validate(){
    this.verify = localStorage.getItem('verificationId');
    const code = this.user.code;
    // return code;
    let credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, code);
    firebase.auth().signInWithCredential(credentials).then((response) => {
      console.log(response);
      this.router.navigateByUrl('/home');
    }).catch((error) =>{
      console.log(error.message);
    })
  }

}
