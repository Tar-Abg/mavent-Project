import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {
  public data:any;
  public data1:any;
  public url:string;

  constructor(private myService:HttpRequestService) { }

  ngOnInit() {
    this.getInformation();
    this.getProducts()
  }
  getInformation(){
    this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
    .subscribe(
      (data: any) => {
        this.data = data;
        if(this.myService.lang == "ru"){
          this.data = this.data.single_object_page.object.ru;
        } else {
          this.data = this.data.single_object_page.object.en
        }
      }
    )
  }

  getProducts(){
    this.url = 'http://alikogrd.beget.tech/api/object/' + this.myService.lang +'/objects?limit=3&random=1'
    this.myService.getData(this.url)
    .subscribe(
      (data: any) => {
        this.data1= data[0];
      }
    );
  }

}
