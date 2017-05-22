import { Component ,OnInit, OnDestroy} from '@angular/core';
import * as Rx from 'rx';
import * as io from 'socket.io-client';

import { Subscription } from 'rxjs/Subscription';
import {ChatService} from '../websocket';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
   providers:[ ChatService]
})
export class TestComponent implements OnInit, OnDestroy {
messages = [];

  connection;

  message;

clean(){
  this.messages = [];
}

 try (){
   
   console.log(this.messages);
   
   
 }

  constructor(private chatService: ChatService) { }

 

 
 sendMessage() {



    this.chatService.sendMessage(this.message);
    this.message = '';
    

  }
 

  ngOnInit() {


 

    this.connection = this.chatService.getMessages().subscribe(message => {

      this.messages.push(message);
      

    })


  }

 

  ngOnDestroy() {

    this.connection.unsubscribe();

  }

}