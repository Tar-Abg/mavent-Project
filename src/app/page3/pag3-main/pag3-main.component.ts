import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-pag3-main',
  templateUrl: './pag3-main.component.html',
  styleUrls: ['./pag3-main.component.css']
})
export class Pag3MainComponent implements OnInit {
  public url:string;
  public url1:string
  public data:any;
  public data1:any;
  public dataForText:any;

  constructor(private service:HttpRequestService) { }

  ngOnInit() {
    this. getInform();
    this.getProducts()
  }


  getInform(){
    this.url = 'http://alikogrd.beget.tech/api/elements/elements/';
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.data  = this.dataForText = data;
        if(this.service.lang == "ru"){
        this.data = this.data.product_page.product.ru;
        this.dataForText = this.dataForText['home'].product.ru;
        } else{
          this.data = this.data.object_page.object.en;
          this.dataForText = this.dataForText['home'].product.en;
        }        
      }
    );
  }

  getProducts(){
    this.url1 = 'http://alikogrd.beget.tech/api/product/' + this.service.lang +'/type-products';
    this.service.getData(this.url1)
    .subscribe(
      (data: any) => {
        this.data1= data;
      }
    );
  }

}
