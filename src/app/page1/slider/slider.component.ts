import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public caruselArray:any;
  public url:String;
  public dataForCarusel:any;

  constructor(private service: HttpRequestService, private http:HttpRequestService) { 
    
  }

  ngOnInit() {
    this.getProducts();
    this.getInformation();
  }
 
  getProducts(){
    this.url = 'http://alikogrd.beget.tech/api/slide/' + this.service.lang +'/slides';
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.caruselArray = data;
      }
    )
     
  }

  getInformation(){
    this.service.getData('http://alikogrd.beget.tech/api/elements/elements/')
    .subscribe(
      (data: any) => {
        this.dataForCarusel = data;
        if(this.service.lang == "ru"){
          this.dataForCarusel = this.dataForCarusel.home.slider.ru;
        } else {
          this.dataForCarusel = this.dataForCarusel.home.slider.en
        }
      }
    )
  }

}
