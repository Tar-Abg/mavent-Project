import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1MainComponent } from './page1/page1-main/page1-main.component';
import { Page2MainComponent } from './page2/page2-main/page2-main.component';
import { Pag3MainComponent } from './page3/pag3-main/pag3-main.component';
import { Page4MainComponent } from './page4/page4-main/page4-main.component';
import { Page5MainComponent } from './page5/page5-main/page5-main.component';
import { ContactWithAsComponent } from './page1/contact-with-as/contact-with-as.component';
import { LastNewsComponent } from './page1/last-news/last-news.component'

   

const routes: Routes = [{path:"home",component: Page1MainComponent},
                        {path:"", redirectTo: '/home',  pathMatch: 'full'},
                        {path:"item/:id",component:Page2MainComponent},
                        {path:"itemAll",component:Pag3MainComponent},
                        {path:"objects",component:Page4MainComponent},
                        {path:"news/:id",component:Page5MainComponent},
                        {path:"feedback",component:ContactWithAsComponent},
                        {path:"news",component:LastNewsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
