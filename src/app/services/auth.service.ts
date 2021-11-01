import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              public router: Router) { }

  async login(email:string, password:string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }

  async loginWithGoogle(){
    try{
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }

  async register(email:string, password:string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Login Fail', error);
      return null;
    }
  }

  // getUserActive(){
  //   return this. afAuth.authState;
  // }

  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['login']);
  });
  }
}
