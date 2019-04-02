import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent implements OnInit {
  public data:any;
  public url:string;
  public dataForNews:object;

  constructor(private myService:HttpRequestService) { }

  ngOnInit() {
    this.getInformation();
    this.getProducts();
  }

  getInformation(){
    this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
    .subscribe(
      (data: any) => {
        this.data = data;
        if(this.myService.lang == "ru"){
          this.data = this.data.home.news.ru;
        } else {
          this.data = this.data.home.news.en;
        }
      }
    )
 }

getProducts(){
  this.url = 'http://alikogrd.beget.tech/api/news/' + this.myService.lang +'/news?limit=5'
  this.myService.getData(this.url)
    .subscribe(
      (data: any) => {
        this.dataForNews = data;
      }
    );
}

}
