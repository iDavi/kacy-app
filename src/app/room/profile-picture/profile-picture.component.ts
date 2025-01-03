import { Component } from '@angular/core';
import { ProfilePictureGenerator } from './profile-picture-generator';
@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {
  pfpSrc : string = ProfilePictureGenerator.generate()
}
