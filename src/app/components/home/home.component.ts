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

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,) { }

  newNote={
    title: '',
    content: '',
  }

  ngOnInit(): void {
    this.authService.userNotLogged();
    this.getUserNotes();
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
      // this.productsFilter = this.getBreakfastItem();
      console.log(this.notes);
    });
  }

  saveNote(){
    const {title, content} = this.newNote;
    console.log('Note saved');
    console.log(this.newNote);
  }
}
