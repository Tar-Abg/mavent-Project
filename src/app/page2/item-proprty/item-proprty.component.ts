import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {  HttpRequestService } from '../../services/http-request.service'


@Component({
  selector: 'app-item-proprty',
  templateUrl: './item-proprty.component.html',
  styleUrls: ['./item-proprty.component.css']
})
export class ItemProprtyComponent implements OnInit {
  public id:number;
  public itemObject:any;
  public url:string;

  constructor(private router:Router,private activRout:ActivatedRoute, private service:HttpRequestService) { 
    this.activRout.params
    .subscribe((params)=>{
      this.id = params['id']
      this.getProducts()
    });
  }

  ngOnInit() {
  }

  getProducts(){
    this.url = 'http://alikogrd.beget.tech/api/product/' + this.service.lang + '/product?id=' + this.id ;
    this.service.getData(this.url)
    .subscribe(
      (data: any) => {
        this.itemObject = data;
      }
    )
  }
}
