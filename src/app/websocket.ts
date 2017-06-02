import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {

  kafkaTSA: any;
  kafkaTPE: any;
  kafkaFlight = [];
  kafkaTest: any;
  
  private url = 'http://localhost:3000';
  private socket;

  // 判斷物件是否為空
  isEmpty(obj) {
    for (var name in obj) {
      return false;
    }
    return true;
  };



  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  sendNews(message) {
    console.log(message);

    this.socket.emit('add-news', message);
  }



  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


  getNews() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('news', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }



  getKafkaTest() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('kafka', (data) => {



        if (this.isEmpty(data) != true) {
          this.kafkaTest = data;
          this.kafkaTest.value = JSON.parse(this.kafkaTest.value)

          if (this.kafkaTest.value.airPort != null) {

            if (this.kafkaTest.value.airPort == 'TPE') {
              this.kafkaTPE = this.kafkaTest
            } else if (this.kafkaTest.value.airPort == 'TSA') {
              this.kafkaTSA = this.kafkaTest
            } else {
              console.log('something wrong');
            }
          }


        }



        this.kafkaFlight[0] = this.kafkaTPE
        this.kafkaFlight[1] = this.kafkaTSA
  

        observer.next(this.kafkaFlight);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}