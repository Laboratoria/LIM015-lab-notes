import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              public router: Router) { }

  /*
  async login(email:string, password:string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }
  */

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        this.router.navigate(['/home']);
      }).catch((error) => {
        window.alert(error.message)
        this.router.navigate(['/login']);
      })
  }

/*
  async loginWithGoogle(){
    try{
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }
  loginWithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then((userCredential) => {
      console.log(userCredential.additionalUserInfo);
      this.router.navigate(['/home']);
    }).catch((error) => {
      window.alert(error.message)
      this.router.navigate(['/login']);
    })
  }
  */

  loginWithGoogle(){
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  /*
  async register(email:string, password:string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }
  */

  register(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result.user);
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error.message)
    })
  }

  // getUserActive(){
  //   return this. afAuth.authState;
  // }

  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
  });
  }
}
