import { Component } from '@angular/core';
import { WebsiteTitleComponent } from "./website-title/website-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WebsiteTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
