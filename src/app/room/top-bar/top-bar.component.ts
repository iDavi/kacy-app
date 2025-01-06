import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() roomId : string = "";

  constructor(private _clipboardService : ClipboardService) {

  }

  copyId() {
    this._clipboardService.copy(this.roomId)
    alert("ID copied to clipboard")
  }
}
