import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fs: AngularFirestore) { }

  addNewUser(id: string, name: string) {
    return this.fs.doc(`users/${id}`).set({
      name: name
    })
  }
}
