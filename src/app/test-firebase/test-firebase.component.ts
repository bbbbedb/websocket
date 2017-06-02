import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-test-firebase',
  templateUrl: './test-firebase.component.html',
  styleUrls: ['./test-firebase.component.css']
})
export class TestFirebaseComponent implements OnInit {
 item: FirebaseListObservable<any>;
user: Observable<firebase.User>;
afAuth;


relative;
  constructor(db: AngularFireDatabase,afAuth: AngularFireAuth) { 
   
    this.item = db.list('/item', { preserveSnapshot: true });

    this.user = afAuth.authState;
  }

  ngOnInit() {
  }
login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }



addItem() {
    this.item.push({name:'try name' });
  }
  
try(){
this.item.push({ name: 'third name' });

  this.item
  .subscribe(snapshots => {
    snapshots.forEach(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.val())
    });
  })


  
  
}
}
