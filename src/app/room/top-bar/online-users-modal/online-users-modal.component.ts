import { NgIf, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-online-users-modal',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './online-users-modal.component.html',
  styleUrl: './online-users-modal.component.css'
})
export class OnlineUsersModalComponent implements OnInit {
  @Input() visible : boolean = false;
  usersList : any[] = [];
  @Output() closeModalEvent = new EventEmitter<boolean>();
  JSON : any = JSON
  constructor(private roomService : RoomService){}

  ngOnInit(): void {
    setInterval(() => {
      this.usersList = this.roomService.onlineUsers
    },1000);
  }
  closeModal(){
    this.closeModalEvent.emit(false)
  }
}
