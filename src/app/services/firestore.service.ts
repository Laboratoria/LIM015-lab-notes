import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //Get collection users
  // getUsers(): Observable<any> {
  //   return this.firestore.collection('users').snapshotChanges();
  // }

  saveInfoUser(info: any) {
    return this.firestore.collection('users').add(info);
  }

  getNotes(): Observable<any> {
    return this.firestore.collection('userNotes').snapshotChanges();
  }
}
