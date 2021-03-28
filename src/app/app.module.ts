import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { MovieListsComponent } from './components/movie-lists/movie-lists.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SignComponent } from './components/sign/sign.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

var firebaseConfig = {
  apiKey: "AIzaSyDuUF4XsDNPW0R4qt-t2zh4DfceiqJWG3Y",
  authDomain: "movies-44dfa.firebaseapp.com",
  projectId: "movies-44dfa",
  storageBucket: "movies-44dfa.appspot.com",
  messagingSenderId: "727581521251",
  appId: "1:727581521251:web:e4114b2c58b6ecd4b8cf56",
  measurementId: "G-HKK13YNTNX"
};

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MovieListsComponent,
    MovieDetailsComponent,
    SignComponent,
    LoginComponent,
    FavoriteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule,

    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
