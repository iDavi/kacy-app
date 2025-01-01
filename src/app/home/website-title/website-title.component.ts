import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Typed } from "typed.ts"
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-website-title',
  standalone: true,
  imports: [],
  templateUrl: './website-title.component.html',
  styleUrl: './website-title.component.css'
})
export class WebsiteTitleComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  websiteSubtitle = "";

  ngOnInit() {
    if(this.isBrowser){
      let typed = new Typed({ 
        callback: (text : string) => {
          this.websiteSubtitle = text
        } 
      });
      typed.type("fast temporary chat room :D")
      typed.run()
    }

  }
}
