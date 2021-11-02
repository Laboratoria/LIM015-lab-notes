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
  userNotes: any[] = [];
  newNote={
    title: '',
    content: '',
  }
  userUID: string | any;

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,) { }


  ngOnInit(): void {
    this.authService.userNotLogged();
    this.getUserNotes();
    this.getUid();
  }

  getUid() {
    // this.authService.currentUser.uid;
    this.userUID = this.authService.getUserActive();
  }

  logOut(){
    this.authService.logout();
    console.log('adioj');
  }

  addNote(){
    console.log('Holii');
     // Trae el listado de productos
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
      this.userNotes = this.getFilterNotes();

    });
  }

  getFilterNotes() {
    return this.notes.filter((item) => item.idUser == this.userUID);
  }

  saveNote(){
    const {title, content} = this.newNote;
    console.log('Note saved');
    console.log(this.newNote);
  }

}
