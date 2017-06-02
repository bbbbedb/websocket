import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "app/app.routing";
// firebase
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewsComponent } from './news/news.component';
import { TestFirebaseComponent } from './test-firebase/test-firebase.component';
import { KafkaviewComponent } from './kafkaview/kafkaview.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewsComponent,
    TestFirebaseComponent,
    KafkaviewComponent,
    FilterPipe
 
  ],
  imports: [
    
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    // AngularFireModule.initializeApp(environment.firebase, 'items'),
    //  AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    // AngularFireAuthModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
  exports: [FilterPipe]
  
})
export class AppModule { }
