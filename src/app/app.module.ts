import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from '../components/products/products.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { HoverBackgroundDirective } from './directives/hover-background.directive';
import { HightLighterDirective } from './directives/hight-lighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    HoverBackgroundDirective,
    HightLighterDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
