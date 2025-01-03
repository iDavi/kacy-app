import { Component } from '@angular/core';
import { MessageBoxComponent } from "./message-box/message-box.component";

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [MessageBoxComponent],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {

}
