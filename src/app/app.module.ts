import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {studioComponent} from './studio/studio.component';
import { ViewComponent } from './view/view.component';
import { PageOneComponent } from './view/page-one/page-one.component';
import { PageTwoComponent } from './view/page-two/page-two.component';
import { PageTreeComponent } from './view/page-tree/page-tree.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { ProductImgOneComponent } from './slide-two/product-img-one/product-img-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    studioComponent,
    PageOneComponent,
    PageTwoComponent,
    PageTreeComponent,
    NavbarComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent,
    SlideFourComponent,
    ProductImgOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
