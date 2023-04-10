import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { basketReducer } from './reducers/basket/basket.reducer';
import { AppStore } from './reducers';

@NgModule({
  declarations: [AppComponent, BasketComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(AppStore),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
