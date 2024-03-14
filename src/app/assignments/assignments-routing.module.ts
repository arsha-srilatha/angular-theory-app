import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsComponent } from './assignments.component';
import { CounterComponent } from './counter/counter.component';
import { DataTransformComponent } from './data-transform/data-transform.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ListComponent } from './list/list.component';
import { NumberValidityComponent } from './number-validity/number-validity.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TravelMediaComponent } from './travel-media/travel-media.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const assignmentsRoutes: Routes = [
  {
    path: '',
    component: AssignmentsComponent,
    children: [
      { path: 'assignment-list', component: ListComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'number-validity', component: NumberValidityComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'travel-media', component: TravelMediaComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'data-transform', component: DataTransformComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(assignmentsRoutes)],
  exports: [RouterModule],
})
export class AssignmentssRoutingModule {}
