import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../../../shared/modules/message';
import { FormControl, ReactiveFormsModule} from '@angular/forms'
import { MessageService } from '../../message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {
  @ViewChild("input") input! : ElementRef;


  content = new FormControl("")
  roomId = ""

  constructor(private messageService : MessageService, private route : ActivatedRoute){
    route.queryParamMap.subscribe((params) => {
      this.roomId = params.get("id") || ""
    });
  }
  sendMessage() {
    try{
    let message = new Message({
      authorName: localStorage.getItem("username") || "",
      signature: localStorage.getItem("signature") || "",
      content: this.content.value || ""
    });
    this.messageService.joinRoom(this.roomId)
    this.messageService.sendMessage(message)
    this.content.setValue("")
    }catch(err){
      console.log(err)
      this.input.nativeElement.classList.add("error")
    }
  }

  enterHandler(event : KeyboardEvent){
    if(event.key == "Enter"){
      this.sendMessage()
    }
      
  }

  removeErrorStyle(){
    this.input.nativeElement.classList.remove("error")
  }
}
