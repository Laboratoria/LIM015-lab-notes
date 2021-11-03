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

  createNote(){
    const {title, content} = this.newNote;
    console.log('Note saved');
    console.log(this.newNote);
    const date = new Date();
    const newDate = date.toString();
    const saveNote = {
      title: title,
      content: content,
      date: newDate,
      idUser: this.localUid,
      idNote: '',
    }
    this.newNote.title='';
    this.newNote.content='';
    this.firestoreService.createNote(saveNote);
  }

  updateNote(){
    const id = this.userNotes.id;
    const content = this.userNotes.content;
    // const idNote=this.notes.id;
    // const statusTable=this.table.status;
    // const objTable = {status:statusTable};
    this.firestoreService.updateNote(id, content);
  }

  deleteNote(id:string){
    this.firestoreService.deleteNote(id);
    console.log('Delete note');
    // this.notes.id
  }
}
