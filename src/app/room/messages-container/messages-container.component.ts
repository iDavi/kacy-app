import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { MessageComponent } from "./message/message.component";
import { Message } from '../../shared/modules/message';
import { RoomService } from '../room.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages-container',
  standalone: true,
  imports: [MessageComponent, NgFor],
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})

export class MessagesContainerComponent implements OnInit {
  @ViewChild("messageContainer") messageContainer!: ElementRef

  @Input() messageList! : Message[]

  messages: Message[] = []

  constructor(private roomService: RoomService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.roomService.message$.subscribe((msg) => {
      this.receiveMessage(msg)
    });
    this.messageList.forEach((msg: Message) => {
      console.log(msg)
      this.receiveMessage(msg)
    });

  }

  receiveMessage(msg: Message) {
    this.messages.push(msg)
    this.cdr.detectChanges()
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    this.roomService.lastMessage = msg;
  }

  isFromMyself(signature: string) {
    return (signature == localStorage.getItem("signature"))
  }

}


