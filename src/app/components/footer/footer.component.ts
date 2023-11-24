import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
footerLinks:string[]=["Products","Features","Newsrooms","Careers","FAQS"];
otherLinks:string[]=["payment","Plugins","Pricing","Privacy policy"];

}
