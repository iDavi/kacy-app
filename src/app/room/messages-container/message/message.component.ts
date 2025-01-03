import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() isFromMyself : boolean = true;
  @Input() content : string = " ";
  @Input() time : Date = new Date();

  getMessageTime(){
    return this.time.toDateString()
  }
}
