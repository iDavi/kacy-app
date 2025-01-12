import { Injectable } from '@angular/core';
import { Message } from '../shared/modules/message';
import { Subject } from 'rxjs';
import { Socket, Channel } from 'phoenix'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RoomService {
  messageSubject = new Subject<Message>()
  message$ = this.messageSubject.asObservable();
  lastMessage! : Message;
  nonInfoMessageCounter : number = 0;
  onlineUserCounter : number = 0;
  onlineUsers! : any[];
  private socket!: Socket; 
  private channel! : Channel;

  constructor() {
    this.lastMessage = new Message({authorName: "John Doe", content: "content", signature: ""})
    this.socket = new Socket(environment.websocketUrl);
    this.socket.connect();
  }


  joinRoom(roomId: string, messageListCallback : (response? : any) => any): void {
    if(roomId == "")
      roomId = "EmptyRoom";
    this.channel = this.socket.channel(`room:${roomId}`, {
      "username": localStorage.getItem("username") || "",
      "signature": localStorage.getItem("signature") || ""
    });
    this.channel.join()

    this.channel.push("list_messages", {}).receive("ok", messageListCallback)
    this.channel.push("list_users", {}).receive("ok", (response) => {
      this.onlineUserCounter = response.data.length
      this.onlineUsers = response.data
    })

    setInterval(() => {
      this.channel.push("list_users", {}).receive("ok", (response) => {
        this.onlineUserCounter = response.data.length
      })
    },1000);
    this.channel.on('messageSent', (message: any) => {
      this.messageSubject.next(message);
    });
  }

  sendMessage(msg : Message): void {
    const payload = {
      "authorName": msg.authorName,
      "content": msg.content,
      "signature": msg.signature
    }
    this.channel.push('message', payload)
  }


}
