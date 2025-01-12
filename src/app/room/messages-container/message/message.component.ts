import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {
  @Input() isFromMyself: boolean = true;
  @Input() content: string = " ";
  @Input() time: Date = new Date();
  @Input() authorName: string = "";
  @Input() signature: string = "";

  canShowMessageInfo!: boolean;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    let lastMessageFromSameUser = this.roomService.lastMessage.signature == this.signature
    //this.canShowMessageInfo = !(this.roomService.lastMessage.signature == this.signature)
    if(lastMessageFromSameUser && this.roomService.nonInfoMessageCounter<4){
      this.roomService.nonInfoMessageCounter++
      this.canShowMessageInfo = false
    }else{
      this.roomService.nonInfoMessageCounter = 0
      this.canShowMessageInfo = true
    }

  }

  getTime() {
    return `${this.time.getHours().toString().padStart(2, "0")}:${this.time.getMinutes().toString().padStart(2, "0")}`
  }
}
