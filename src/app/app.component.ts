import { Component, OnInit, Injectable, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordId } from './shared/modules/word-id';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'kacy-app';
  signature = "" 
  whiteTheme = false;

  setDarkTheme(){
    this.whiteTheme = false
  }
  setWhiteTheme(){
    this.whiteTheme = true
  }
  constructor(){
    afterNextRender(() => {
      this.signature = localStorage.getItem("signature") || this.generateSignature() 
      if(!localStorage.getItem("username") ){
        localStorage.setItem("username", WordId.generate(1, " "))
      }
    });
  }

  private generateSignature() : string {
    let signature = WordId.generate(4, ""); // 2850^4 possibilities of signatures
    localStorage.setItem("signature", signature);
    return signature;
  }
}
