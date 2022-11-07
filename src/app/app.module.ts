

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProfileinformationComponent } from './component/profileinformation/profileinformation.component';
import { ManageaddressComponent } from './component/manageaddress/manageaddress.component';
import { PanCardComponent } from './component/pan-card/pan-card.component';
import { SavedUPIComponent } from './component/saved-upi/saved-upi.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { SavedcardsComponent } from './component/savedcards/savedcards.component';
import { MyReviewsComponent } from './component/my-reviews/my-reviews.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyordersComponent } from './component/myorders/myorders.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddaddressComponent } from './component/addaddress/addaddress.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileinformationComponent,
    ManageaddressComponent,
    PanCardComponent,
    SavedUPIComponent,
    WishlistComponent,
    SavedcardsComponent,
    MyReviewsComponent,
    DashboardComponent,
    MyordersComponent,
    AddaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
