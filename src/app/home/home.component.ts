import { Component } from '@angular/core';
import { WebsiteTitleComponent } from "./website-title/website-title.component";
import { PrimaryButtonComponent } from "../shared/button/primary-button/primary-button.component";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WebsiteTitleComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
