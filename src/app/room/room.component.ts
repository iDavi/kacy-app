import { Component } from '@angular/core';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
import { ActivatedRoute } from '@angular/router';
import { MessagesContainerComponent } from "./messages-container/messages-container.component";

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [TopBarComponent, BottomBarComponent, MessagesContainerComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  roomId : string = ""
  constructor(private route : ActivatedRoute){
    this.route.queryParamMap.subscribe(params => {
      this.roomId = params.get("id") || "EmptyRoom"
    });
  }
}
