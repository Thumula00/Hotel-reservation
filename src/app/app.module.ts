import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotel/hotel.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MyBookComponent } from './my-book/my-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AllBookComponent } from './all-book/all-book.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HotelComponent,
    FilterPipe,
    BookComponent,
    UserComponent,
    AdminComponent,
    HotelListComponent,
    MyBookComponent,
    EditBookComponent,
    AllBookComponent,
    SpecialOffersComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
