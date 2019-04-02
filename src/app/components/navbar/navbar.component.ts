import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public dataForNavbar;

  constructor( public myService:HttpRequestService) {
    this.getInformation();
   }
  
   getInformation(){
    
     this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
     .subscribe(
      (data: any) => {
        this.dataForNavbar = data;
        if(this.myService.lang == "ru"){
          this.dataForNavbar = this.dataForNavbar.navbar_menu.navbar.ru;
        } else {
          this.dataForNavbar = this.dataForNavbar.navbar_menu.navbar.en
        }
      }
    )
     
  }
  

  ngOnInit() {
  }
  
}
