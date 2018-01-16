import { Component, OnInit, ViewChild, ElementRef, trigger, transition, style, animate, state } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';

class User {
  constructor(public name: string, public email_id: string, public contact_number: number, public image?: string, public id?: string) {
    // image and id are optional properties
  }
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

  constructor(private afs: AngularFirestore) {
    this.addUser = new User('', '', null, null, null);
    }

  ngOnInit() {
    // 'users' below is the reference to UsersCollection
      this.UsersCollection = this.afs.collection('users', x => x.orderBy('name', 'asc'));
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

}

insert() {
  this.UsersCollection.add(
    { name: this.addUser.name, email_id: this.addUser.email_id, contact_number: this.addUser.contact_number,
      image: this.addUser.image, id: this.addUser.id });
  this.addUser = new User('', '', null, null, null);
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

}



