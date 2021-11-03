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

  createNote(note: any){
    return this.firestore.collection('userNotes').add(note);
  }

  updateNote(id: string, content:Object){
    return this.firestore.collection('userNotes').doc(id).update(content);
  }

  deleteNote(id:string){
    return this.firestore.collection('userNotes').doc(id).delete();
  }
}
