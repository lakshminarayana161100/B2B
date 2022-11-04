import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ManageaddressComponent } from './component/manageaddress/manageaddress.component';
import { MyReviewsComponent } from './component/my-reviews/my-reviews.component';
import { PanCardComponent } from './component/pan-card/pan-card.component';
import { ProfileinformationComponent } from './component/profileinformation/profileinformation.component';
import { SavedUPIComponent } from './component/saved-upi/saved-upi.component';
import { SavedcardsComponent } from './component/savedcards/savedcards.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [

  {path:'', redirectTo:'/header',pathMatch: 'full'},

  {
    path: 'header',
    component: HeaderComponent,children:[

      {
        path: '',
        pathMatch:'full',
        component: ProfileinformationComponent
      },
      {
        path: 'manage',
        component: ManageaddressComponent
      },
      {
        path: 'pancard',
        component: PanCardComponent
      },
      {
        path: 'savedupi',
        component: SavedUPIComponent
      },
      {
        path: 'savedcard',
        component: SavedcardsComponent
      }

    ]
  } ,
 
  {
    path: 'MyReviews',
    component: MyReviewsComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
  path: 'myorders',
  component:MyReviewsComponent
  }
];




// const routes: Routes = [

//   {path:'', redirectTo:'/header',pathMatch: 'full'},

//   {
//     path: 'header',
//     component: HeaderComponent
//   } ,
//   {
//     path: 'profile',
//     component: ProfileinformationComponent
//   },
//   {
//     path: 'manage',
//     component: ManageaddressComponent
//   },
//   {
//     path: 'pancard',
//     component: PanCardComponent
//   },
//   {
//     path: 'savedupi',
//     component: SavedUPIComponent
//   },
//   {
//     path: 'savedcard',
//     component: SavedcardsComponent
//   },
//   {
//     path: 'MyReviews',
//     component: MyReviewsComponent
//   }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
