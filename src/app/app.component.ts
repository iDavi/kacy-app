import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordId } from './shared/modules/word-id';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'kacy-app';
  signature = "" 
  themeSelectorVisible = false;
  theme = localStorage.getItem("theme") || "";
  themeSelectorLinkText = "themes"

  selectTheme(theme : string){
    localStorage.setItem("theme", theme)
    this.theme = theme
  }
  themeSelectorLinkClick(){
    if(this.themeSelectorVisible){
      this.themeSelectorVisible = false
      this.themeSelectorLinkText = "themes"
      return;
    }
    this.themeSelectorVisible = true
    this.themeSelectorLinkText = "return to Kacy"
  }
  constructor(){
      this.signature = localStorage.getItem("signature") || this.generateSignature() 
      if(!localStorage.getItem("username") ){
        localStorage.setItem("username", WordId.generate(1, " "))
      }
  }

  private generateSignature() : string {
    let signature = WordId.generate(4, ""); // 2850^4 possibilities of signatures
    localStorage.setItem("signature", signature);
    return signature;
  }
}
