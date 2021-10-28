import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitzy-notes';
  // item: Observable<any[]>;
  // doc: DocumentReference;

  constructor(/*  firestore: AngularFirestore*/ ) {

    // this.doc = doc(firestore, 'item/ktPVwVjKHzaMLAW4Upk4');
    // console.log(this.doc);

    // onSnapshot(doc, (snap: any) => {
    //     // ...
    //     console.log(snap);
    // });

  //   docSnapshots(this.doc).subscribe(data => {
  //     console.log(data);
  //   });
  // }

    // this.item = firestore.collection('item').valueChanges();
    // console.log(this.item);

  }
}
