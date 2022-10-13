import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ListOverviewComponent } from './list-overview/list-overview.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ListDetailsComponent } from './list-details/list-details.component';
import {MatMenuModule} from '@angular/material/menu'; 



@NgModule({
  declarations: [
    AppComponent,
    ListOverviewComponent,
    ListDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
