import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { RoomService } from '../room.service';
import { OnlineUsersModalComponent } from "./online-users-modal/online-users-modal.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [OnlineUsersModalComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() roomId : string = "";
  username = window.localStorage.getItem("username") || ""
  onlineUsersModalVisible = false;

  onlineUserCounter = 0;
  constructor(private clipboardService : ClipboardService, private roomService : RoomService) {
    setInterval(() => {
      this.onlineUserCounter = roomService.onlineUserCounter
    }, 1000);
  }

  copyId() {
    this.clipboardService.copy(this.roomId)
    alert("ID copied to clipboard")
  }
  copyUsername(){
    this.clipboardService.copy(this.username)
    alert("Username copied to clipboard")
  }

  onModalClose($event : boolean){
    this.onlineUsersModalVisible = false;
  }
}
