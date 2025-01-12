import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
import { ActivatedRoute } from '@angular/router';
import { MessagesContainerComponent } from "./messages-container/messages-container.component";
import { RoomService } from './room.service';
import { NgIf } from '@angular/common';
import { Message } from '../shared/modules/message';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [TopBarComponent, BottomBarComponent, MessagesContainerComponent, NgIf],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  roomId: string = ""
  loadedMessageList = false
  messageList! : Message[]

  constructor(private route: ActivatedRoute, private roomService: RoomService) {
    this.route.queryParamMap.subscribe(params => {
      this.roomId = params.get("id") || "EmptyRoom"
    });
  }

  ngOnInit(): void {
    this.roomService.joinRoom(this.roomId, (response) => {
      let list: Message[] = response.data.slice().reverse()
      this.messageList = list
      this.loadedMessageList = true
    })
  }
}
