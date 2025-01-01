import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { TextboxComponent } from "../../shared/textbox/textbox.component";
import { ButtonComponent } from "../../shared/button/button.component";

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

  @Output() closeModalEvent = new EventEmitter<boolean>();

  closeModal(){
    this.closeModalEvent.emit(false)
  }
}
