import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-our-objects',
  templateUrl: './our-objects.component.html',
  styleUrls: ['./our-objects.component.css']
})
export class OurObjectsComponent implements OnInit {
  public data:any

  constructor(private myService:HttpRequestService) { }

  ngOnInit() {
    this.getInformation()
  }

  getInformation(){
    this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
    .subscribe(
      (data: any) => {
        this.data = data;
        if(this.myService.lang == "ru"){
          this.data = this.data.home.object.ru;
        } else {
          this.data = this.data.home.object.en
        }
      }
    )
 }

}
