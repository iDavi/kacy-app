import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {
  @Input() title : string = "Title"
  @Input() placeholder : string = "Write here..."
  @Input() defaultText : string = ""
  @Input() inputStyle : string = ""
}
