import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-page2-main',
  templateUrl: './page2-main.component.html',
  styleUrls: ['./page2-main.component.css']
})
export class Page2MainComponent implements OnInit {
  public url:string;
  public data:any;
  public data1:Object;

  constructor(private service:HttpRequestService) { }

  ngOnInit() {
    this.getProducts();
    this.getProductss();
  }
  getProducts(){
    this.url = ' http://alikogrd.beget.tech/api/product/' + this.service.lang +'/products?limit=3&random=1';
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.data = data;
      }
    );
  }

  getProductss(){
    this.url = 'http://alikogrd.beget.tech/api/elements/elements';
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.data1 = data;
        if(this.service.lang == 'ru'){
          this.data1 = this.data1['single_product_page'].product.ru;
        } else {
          this.data1 = this.data1['single_product_page'].product.en;
        }
      }
    );
  }

}
