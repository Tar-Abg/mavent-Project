import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpRequestService } from './services/http-request.service';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './page1/slider/slider.component';
import { Page1MainComponent } from './page1/page1-main/page1-main.component';
import { OurProductsComponent } from './page1/our-products/our-products.component';
import { FasatniSistemiComponent } from './page1/fasatni-sistemi/fasatni-sistemi.component';
import { SistmeMaventComponent } from './page1/sistme-mavent/sistme-mavent.component';
import { OurObjectsComponent } from './page1/our-objects/our-objects.component';
import { Slider2Component } from './page1/slider2/slider2.component';
import { ContactWithAsComponent } from './page1/contact-with-as/contact-with-as.component';
import { LastNewsComponent } from './page1/last-news/last-news.component';
import { ItemComponent } from './page1/item/item.component';
import { QualityComponent } from './page1/quality/quality.component';
import { ItemProprtyComponent } from './page2/item-proprty/item-proprty.component';
import { Page2MainComponent } from './page2/page2-main/page2-main.component';
import { Pag3MainComponent } from './page3/pag3-main/pag3-main.component';
import { Page4MainComponent } from './page4/page4-main/page4-main.component';
import { Page5MainComponent } from './page5/page5-main/page5-main.component';
import { NewsItemComponent } from './page5/news-item/news-item.component';
import { RandomNewsComponent } from './page5/random-news/random-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    Page1MainComponent,
    OurProductsComponent,
    FasatniSistemiComponent,
    SistmeMaventComponent,
    OurObjectsComponent,
    Slider2Component,
    ContactWithAsComponent,
    LastNewsComponent,
    ItemComponent,
    QualityComponent,
    ItemProprtyComponent,
    Page2MainComponent,
    Pag3MainComponent,
    Page4MainComponent,
    Page5MainComponent,
    NewsItemComponent,
    RandomNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
],
    
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
