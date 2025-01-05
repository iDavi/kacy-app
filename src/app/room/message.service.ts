import { Injectable } from '@angular/core';
import { Message } from '../shared/modules/message';
import { Subject } from 'rxjs';
import { Socket, Channel } from 'phoenix'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageSubject = new Subject<Message>()
  message$ = this.messageSubject.asObservable();
  private socket!: Socket; 
  private channel! : Channel;

  constructor() {
    this.socket = new Socket(environment.websocketUrl);
    this.socket.connect();
  }


  joinRoom(roomId: string): void {
    if(roomId == "")
      roomId = "EmptyRoom";
    this.channel = this.socket.channel(`room:${roomId}`, {});
    this.channel.join()

    this.channel.on('messageSent', (message: any) => {
      console.log(message)
      this.messageSubject.next(message);
    });
  }

  sendMessage(msg : Message): void {
    const payload = {
      "authorName": msg.authorName,
      "content": msg.content,
      "signature": msg.signature
    }
    this.channel.push('message', payload).receive('ok', response => {
      console.log('message sent', response);
    });
  }

}
