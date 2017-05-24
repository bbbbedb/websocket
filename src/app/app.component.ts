import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rx';
import * as io from 'socket.io-client';

import { Subscription } from 'rxjs/Subscription';
import { ChatService } from './websocket';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent implements OnInit, OnDestroy {
  messages: any;
  
  connection;

  message;

  clean() {
    this.messages = [];
  }

  try() {

    console.log(this.messages);
  
  }

  constructor(private chatService: ChatService) { }




  sendMessage() {



    this.chatService.sendMessage(this.message);
    this.message = '';


  }


  ngOnInit() {




    this.connection = this.chatService.getMessages().subscribe(message => {



      // this.messages.push(message);
      this.messages = message[0].text;

    })


  }



  ngOnDestroy() {

    this.connection.unsubscribe();
    

  }

}