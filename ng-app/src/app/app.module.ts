import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductRepository } from './models/product-repository';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductListComponent,
    CategoryListComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
