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
  @Input() authorName : string = "o";
  getTime() {
    return `${this.time.getHours().toString().padStart(2, "0")}:${this.time.getMinutes().toString().padStart(2,"0")}`
  }
}
