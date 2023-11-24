import { Component } from '@angular/core';
import { links } from './links.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbarLinks:links[]=[{text:'Home',route:''}, {text:'Table',route:'/table'},{text:'Contact',route:'/contact'}];
showManu:boolean=false;
toggleManue(){
  this.showManu=!this.showManu;
}
}
