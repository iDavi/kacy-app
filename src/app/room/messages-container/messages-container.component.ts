import { Component } from '@angular/core';
import { MessageComponent } from "./message/message.component";

@Component({
  selector: 'app-messages-container',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './messages-container.component.html',
  styleUrl: './messages-container.component.css'
})
export class MessagesContainerComponent {

}
