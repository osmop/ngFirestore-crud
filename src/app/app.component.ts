import { Component, OnInit, ViewChild, ElementRef, trigger, transition, style, animate, state } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';  // ???

class User {
  constructor(public name: string, public email_id: string, public contact_number: number, public image?: string, public id?: string) {
    // image and id are optional properties
  }
}

// Note test
interface Note {
  content: string;
  hearts: number;
  idNote?: any; // optional property
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  UsersCollection: AngularFirestoreCollection<User>;
  user: Observable<User[]>;
  UsersDoc: AngularFirestoreDocument<User>;
  addUser: User;
  editState = false;
  // editState: boolean = false;
  itemToUpdate: User;

  // Note test 1
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  // Note test 2
  noteDoc: AngularFirestoreDocument<Note>;
  note: Observable<Note>;

  newContent: string;

  constructor(private afs: AngularFirestore) {
    this.addUser = new User('', '', null, null, null);
    }


  ngOnInit() {
    // 'users' below is the reference to UsersCollection
    this.UsersCollection = this.afs.collection('users', ref => ref.orderBy('name', 'asc'));
    // this.UsersCollection = this.afs.collection('users', ref => { return ref.where('name', '==', 'n3'); });
    // take snapshot of the changes in UsersCollection
      this.user = this.UsersCollection.snapshotChanges().map(
        changes => {
      return changes.map(
        a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
    });
  });

  // Search example with where function:
  // this.UsersCollection = this.afs.collection('users', ref=> {
  //   return ref.where('number', '>', 11).where('number', '<', 21)
  // });
  // this.user = this.UsersCollection.valueChanges()

  // Note test 1
  // this.notesCollection = this.afs.collection('notes');  // reference
  // this.notesCollection = this.afs.collection('notes', ref => {
  //   return ref.orderBy('content');
  // });  // reference
  // this.notes = this.notesCollection.valueChanges();  // observable of notes data

  // Note test 2
    this.noteDoc = this.afs.doc('/notes/eqsrRUoY91SPv4iY2fey');
    this.note = this.noteDoc.valueChanges();


}

insert() {
  this.UsersCollection.add(
    { name: this.addUser.name, email_id: this.addUser.email_id, contact_number: this.addUser.contact_number,
      image: this.addUser.image, id: this.addUser.id });
  // this.addUser = new User('', '', null, null, null);
}

delete(item: User) {
 this.UsersDoc = this.afs.doc(`users/${item.id}`);
 this.UsersDoc.delete();
}

edit(item: User) {
 this.editState = true;
 this.itemToUpdate = new User(item.name, item.email_id, item.contact_number, item.image, item.id);
 }

update() {
 this.UsersDoc = this.afs.doc(`users/${this.itemToUpdate.id}`);
 this.UsersDoc.update({ name: this.itemToUpdate.name, email_id: this.itemToUpdate.email_id,
  contact_number: this.itemToUpdate.contact_number, image: this.itemToUpdate.image, id: this.itemToUpdate.id });
}

clearState() {
 this.editState = false;
 this.itemToUpdate = null;
 }


 // Note test 2
 updateContent() {
   this.noteDoc.update({content: this.newContent});
 }

}



