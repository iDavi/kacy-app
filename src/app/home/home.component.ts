import { Component } from '@angular/core';
import { WebsiteTitleComponent } from "./website-title/website-title.component";
import { ButtonComponent } from "../shared/button/button.component";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WebsiteTitleComponent, ButtonComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  modalVisible : boolean = false
  isJoining : boolean = false;

  onModalClose($event : boolean){
    this.modalVisible = false;
  }
  openCreateRoomModal(){
    this.isJoining=false;
    this.modalVisible=true;
  }
  openJoinRoomModal(){
    this.isJoining=true;
    this.modalVisible=true;
  }
  getModalTitle(){
    if(this.isJoining)
      return "Join room";
    return "Create room";
  }

}
