import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { SearchInventoryComponent } from './components/search-inventory/search-inventory.component';
import { BillManagementComponent } from './components/bill-management/bill-management.component';
import { BillGenerateComponent } from './components/bill-generate/bill-generate.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HomeComponent,
    AddItemComponent,
    ViewInventoryComponent,
    SearchInventoryComponent,
    BillManagementComponent,
    BillGenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }