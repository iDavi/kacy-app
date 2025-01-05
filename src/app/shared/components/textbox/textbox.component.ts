import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {
  @ViewChild("input") input! : ElementRef
  @Input() title : string = "Title"
  @Input() placeholder : string = "Write here..."
  @Input() defaultText : string = ""
  @Input() inputStyle : string = ""

  getValue(){
    return this.input.nativeElement.value
  }
}
