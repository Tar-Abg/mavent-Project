import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'


@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {
  public dataForOurBrojects:Object;
  public url:string;
  public url1:string;
  public forInput:object;
  public forInput1:object;
  public forInput2:any

  constructor(private service:HttpRequestService) { 
    
  }

  ngOnInit() {
    this.getInform()
    this. getProducts()
  }

  getInform(){
    this.url = 'http://alikogrd.beget.tech/api/elements/elements/';
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.dataForOurBrojects = this.forInput1 = data;
        if(this.service.lang == "ru"){
          this.dataForOurBrojects = this.dataForOurBrojects['product_page'].product.ru
          this.forInput1 = this.forInput1['home'].product.ru;
        } else{
          this.forInput1 = this.forInput1['home'].product.en
          this.dataForOurBrojects = this.dataForOurBrojects['product_page'].product.en
        }        
      }
    )
  }

  getProducts(){
    this.url1 = 'http://alikogrd.beget.tech/api/product/' + this.service.lang +'/type-products';
    this.service.getData(this.url1)
    .subscribe(
      (data: any) => {
        this.forInput = data;
      }
    );
  }
}
