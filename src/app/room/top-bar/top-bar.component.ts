import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() roomId : string = "";
}
