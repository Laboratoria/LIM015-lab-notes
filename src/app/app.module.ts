// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
// import { environment } from '../environments/environment'; //FIREBASE

//Version nueva
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideStorage,getStorage } from '@angular/fire/storage';

// Version anterior
// import { AngularFireModule } from '@angular/fire/compat'; //FIREBASE
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //FIREBASE


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase), //FIREBASE
    // AngularFirestoreModule, //FIREBASE

    /*
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
// Components
// import { environment } from '../environments/environment'; //FIREBASE

// Version anterior
// import { AngularFireModule } from '@angular/fire/compat'; //FIREBASE
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; //FIREBASE

    // AngularFireModule.initializeApp(environment.firebase), //FIREBASE
    // AngularFirestoreModule, //FIREBASE

})
*/