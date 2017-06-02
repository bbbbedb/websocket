import { Component, OnInit, OnDestroy,Pipe, PipeTransform } from '@angular/core';
import * as Rx from 'rx';
import * as io from 'socket.io-client';


import { Subscription } from 'rxjs/Subscription';
import { ChatService } from './websocket';
import {FilterPipe} from './filter.pipe';




@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
  // ,
  // pipes:[FilterPipe]



})


export class AppComponent implements OnInit, OnDestroy {
  messages: any;
  connection;
  kafkaConnection;
  message;
  showKafka;

  kafkaTest: any;
  kafkaTPE: any;
  kafkaTSA: any;



  clean() {
    this.messages = [];
  }


  // 判斷物件是否為空
  isEmpty(obj) {
    for (var name in obj) {
      return false;
    }
    return true;
  };


  try() {
    
  
    
    console.log(this.kafkaTPE);
    console.log(this.kafkaTSA);

    // console.log(this.messages);

    // console.log(this.showKafka.InstantSchedule[0].airlineCH);



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

    // get kafka

    this.kafkaConnection = this.chatService.getKafkaTest().subscribe(message => {

      if(message[0].value.InstantSchedule !=undefined){
        this.kafkaTPE=message[0].value.InstantSchedule;
      }else if(message[1].value.InstantSchedule!=undefined){
this.kafkaTSA=message[1].value.InstantSchedule;
      }else{

      }





  
     
     
     console.log(message);
     
      // console.log('TPE', this.kafkaTPE);
      //  console.log('TSA', this.kafkaTSA);

    })


  }



  ngOnDestroy() {

    this.connection.unsubscribe();
    this.kafkaConnection.unsubscribe();

  }

}