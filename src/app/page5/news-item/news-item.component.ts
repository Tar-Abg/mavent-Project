import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { HttpRequestService } from "../../services/http-request.service"

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  public id:Number;
  public url:String;
  public data:Object;

  constructor( private router:Router,private activRout:ActivatedRoute, private service:HttpRequestService) {
    this.activRout.params.subscribe((params)=>{
      this.id = params['id']
      this.getProducts()
    });
   }

  ngOnInit() {
  }
  getProducts(){
    this.url = 'http://alikogrd.beget.tech/api/news/' + this.service.lang + '/one-news?id=' + this.id ;
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.data = data;
      }
    );
  }

}
