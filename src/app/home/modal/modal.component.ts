import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { TextboxComponent } from "../../shared/components/textbox/textbox.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Router } from '@angular/router';
import { WordId } from '../../shared/modules/word-id';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, TextboxComponent, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title : string = "Modal"
  @Input() visible : boolean = false;
  @Input() askRoomId : boolean = false;
  @ViewChild("usernameTextbox") usernameTextbox! : TextboxComponent;
  @ViewChild("roomIdTextbox") roomIdTextbox! : TextboxComponent;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  generatedUsername = this.generateUsername()
  constructor(private router : Router){}

  private generateUsername(){
    return WordId.generate(1, " ")
  }
  submit() {
    console.log("a")
    const username = this.usernameTextbox.getValue();
    if(!username){
      alert("username can't be blank!")
      return;
    }
    const roomId = this.askRoomId ? this.roomIdTextbox.getValue() : WordId.generate(2, "");

    window.localStorage.setItem("username", username);
    this.router.navigate(["room"], {queryParams: {"id": roomId}})
    this.closeModal();
  }


  closeModal(){
    this.closeModalEvent.emit(false)
  }

  
}
