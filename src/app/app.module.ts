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
import { FormsModule } from '@angular/forms';
import { ListElementsComponent } from './list-elements/list-elements.component';
import {MatListModule} from '@angular/material/list'; 



@NgModule({
  declarations: [
    AppComponent,
    ListOverviewComponent,
    ListDetailsComponent,
    ListElementsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatListModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
