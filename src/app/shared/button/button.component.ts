import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";
import { NgIf } from '@angular/common';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type : string = "primary";
  @Input() label : string = "Button";

}
