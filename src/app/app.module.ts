import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2'

export const firebaseConfig = {
   // Initialize Firebase

    apiKey: "AIzaSyBWW-8LCwxTIOBI5NYPK6L8Fsvhde5Qcpw",
    authDomain: "fanzine.firebaseapp.com",
    databaseURL: "https://fanzine.firebaseio.com",
    storageBucket: "firebase-fanzine.appspot.com",
    messagingSenderId: "685391812532"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
