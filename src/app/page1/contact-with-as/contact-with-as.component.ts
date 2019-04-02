import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../services/http-request.service'

@Component({
  selector: 'app-contact-with-as',
  templateUrl: './contact-with-as.component.html',
  styleUrls: ['./contact-with-as.component.css']
})
export class ContactWithAsComponent implements OnInit {
  public data:any;
  public dataForContacts:any;
  public data1:any;
  

  constructor(private myService:HttpRequestService) { }

  ngOnInit() {
    this.getInformation();
  }
  
  getInformation(){
    this.myService.getData('http://alikogrd.beget.tech/api/elements/elements/')
      .subscribe(
        (data: any) => {
          this.data = this.data1 = this.dataForContacts = data;
          if(this.myService.lang == "ru"){
            this.data = this.data.home.feedback.ru;
            this.dataForContacts = this.dataForContacts.home.contacts.ru;
          } else {
            this.data = this.data.home.feedback.en;
            this.dataForContacts = this.dataForContacts.home.contacts.en
          }
        }
    )
    
 }

}
