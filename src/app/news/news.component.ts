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

  connection;
news: any;
  connectionNews;



 try (){
   

     console.log(this.news);
   
 }

  constructor(private chatService: ChatService) { }

 

 
 sendMessage() {



    this.chatService.sendNews(this.news);

    

  }
 

  ngOnInit() {


 

    this.connectionNews = this.chatService.getNews().subscribe(message => {



      // this.messages.push(message);
      this.news = message[0].news;

    })


  }

 

  ngOnDestroy() {

    this.connectionNews.unsubscribe();

  }

}