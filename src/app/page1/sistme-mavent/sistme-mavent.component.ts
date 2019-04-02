import { Component, OnInit } from '@angular/core';
import { HttpRequestService  } from '../../services/http-request.service';

@Component({
  selector: 'app-sistme-mavent',
  templateUrl: './sistme-mavent.component.html',
  styleUrls: ['./sistme-mavent.component.css']
})
export class SistmeMaventComponent implements OnInit {
  public myArray:any

  constructor( private myService:HttpRequestService) { }

  ngOnInit() {
    this.getInformation()
  }
  getInformation(){
    this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
    .subscribe(
      (data: any) => {
        this.myArray = data;
        if(this.myService.lang == "ru"){
          this.myArray = this.myArray.home.about.ru;
        } else {
          this.myArray = this.myArray.home.about.en
        }
      }
    )
  }
  
}
