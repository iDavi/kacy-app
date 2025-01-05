import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { MessageComponent } from "./message/message.component";
import { Message } from '../../shared/modules/message';
import { MessageService } from '../message.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages-container',
  standalone: true,
  imports: [MessageComponent, NgFor],
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})

export class MessagesContainerComponent implements OnInit {
  @ViewChild("messageContainer") messageContainer! : ElementRef
  messages : Message[] = []

  constructor(private messageService : MessageService, private cdr : ChangeDetectorRef){}
  ngOnInit(): void {
    this.messageService.message$.subscribe((msg) => {
      this.receiveMessage(msg)
    });
  }

  receiveMessage(msg : Message){
    this.messages.push(msg)
    this.cdr.detectChanges()
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }

  isFromMyself(signature : string) {
    return (signature == localStorage.getItem("signature"))
  }

}


