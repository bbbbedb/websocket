import { Component ,OnInit, OnDestroy} from '@angular/core';
import * as Rx from 'rx';
import * as io from 'socket.io-client';

import { Subscription } from 'rxjs/Subscription';
import {ChatService} from '../websocket';




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
   providers:[ ChatService]
})



export class NewsComponent implements OnInit, OnDestroy {
  today=new Date();
  // newspaper: {
  //   title: string;
  //   writer:string;
  //   date: string;
  //   contain: string;
  // };
  currentDateTime: string;



 newspaper= {
    title:'',
    writer:'',
    date: '',
    contain:''
  }


  connection;
  news: any;
  connectionNews;



 try (){
   console.log(this.currentDateTime);
   
    console.log(this.newspaper);
    
     console.log(this.news);
   console.log(this.today);
   
 }

getdate(){

this.currentDateTime =
this.today.getFullYear()+'年'+
(this.today.getMonth()+1)+'月'+
this.today.getDate()+'日('+
this.today.getHours()+':'+this.today.getMinutes()+
')';
console.log(this.currentDateTime);
this.newspaper.date =this.currentDateTime;
}

constructor(private chatService: ChatService) {}

 

 
 sendNews() {


    console.log(this.newspaper);
    
    this.chatService.sendNews(this.newspaper);

    this.newspaper= {
    title:'',
    writer:'',
    date: '',
    contain:''
  }
  this.getdate();

  }
 

  ngOnInit() {
    this.getdate();


    this.connectionNews = this.chatService.getNews().subscribe(message => {



      // this.messages.push(message);
      this.news = message[0].news;

    })


  }

 

  ngOnDestroy() {

    this.connectionNews.unsubscribe();

  }

}