import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FirebaseApp } from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseMessaging } from '@firebase/messaging-types';
import { FirebaseStorage } from '@firebase/storage-types';
import { FirebaseFirestore } from '@firebase/firestore-types';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
