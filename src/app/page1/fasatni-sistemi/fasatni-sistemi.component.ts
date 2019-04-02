import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fasatni-sistemi',
  templateUrl: './fasatni-sistemi.component.html',
  styleUrls: ['./fasatni-sistemi.component.css']
})
export class FasatniSistemiComponent implements OnInit {
  public url:String;
  public data:any;
  @Input() dataFromOutside
  @Input() dataFromOutside1;
  

  constructor() { }

  ngOnInit() {

  }

}
