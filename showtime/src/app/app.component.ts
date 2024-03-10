import { Component,HostListener, ViewEncapsulation } from '@angular/core';

import { BehaviorSubject } from "rxjs";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'showtime';
  navbg:any;

  toggleCollapse() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.toggle('show');
    }
  }

  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,"scrolllength")

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color':'#000000',
      }
    }else{
      this.navbg = {
        
      }
    }

  }
}
