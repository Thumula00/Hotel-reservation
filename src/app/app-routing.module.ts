import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AllBookComponent } from './all-book/all-book.component';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { MyBookComponent } from './my-book/my-book.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { EventsComponent } from './events/events.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path:'', redirectTo:'hotel_list' , pathMatch:'full' },
  {path: 'special-offers', component: SpecialOffersComponent},
  { path:'events', component: EventsComponent },
  { path:'reviews', component: ReviewsComponent },
  { path:'faq', component: FaqComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'hotel', component:HotelComponent },
  { path:'book', component:BookComponent },
  { path:'user', component:UserComponent },
  { path:'admin', component:AdminComponent },
  { path:'hotel_list', component:HotelListComponent },
  { path:'book/:id', component:BookComponent },
  { path:'my_book', component:MyBookComponent },
  { path:'all_book', component:AllBookComponent },
  { path:'edit_book/:id', component:EditBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgbPaginationModule, NgbAlertModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
