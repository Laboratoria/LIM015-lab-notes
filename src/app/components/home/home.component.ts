import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: any[] = [];
  userNotes: any;
  newNote={
    title: '',
    content: '',
  }
  userUID: string | any;
  localUid: any = '';

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,) { }


  ngOnInit(): void {
    this.authService.userNotLogged();
    this.getUserNotes();
    this.getUid();
    this.localUid = localStorage.getItem('localUid');
  }

  getUid() {
    // this.authService.currentUser.uid;
    this.userUID = this.authService.getUserActive();
  }

  logOut(){
    window.localStorage.removeItem('localUid');
    this.authService.logout();
    console.log('adioj');
  }

  addNote(){
    console.log('Holii');
  }

  getUserNotes(){
    this.firestoreService.getNotes().subscribe((data: any[]) => {
      this.notes = [];
      data.forEach((element:any) => {
        this.notes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      console.log(this.notes);
      this.userNotes = this.getFilteredNotes();

    });
  }

  getFilteredNotes() {
    if (this.localUid === this.userUID){
      return this.notes.filter((item) => item.idUser === this.userUID);
    }
    else return this.notes.filter((item) => item.idUser === this.localUid);
  }

  saveNote(){
    const {title, content} = this.newNote;
    console.log('Note saved');
    console.log(this.newNote);
  }

}
