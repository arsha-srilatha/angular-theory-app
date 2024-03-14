import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssignmentsComponent } from './assignments.component';
import { CounterComponent } from './counter/counter.component';
import { EvenComponent } from './counter/even/even.component';
import { GameControlComponent } from './counter/game-control/game-control.component';
import { OddComponent } from './counter/odd/odd.component';
import { DataTransformComponent } from './data-transform/data-transform.component';
import { ReversePipe } from './data-transform/reverse.pipe';
import { SortPipe } from './data-transform/sort.pipe';
import { FavoriteItemComponent } from './favourites/favorite-item/favorite-item.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ListComponent } from './list/list.component';
import { NumberValidityComponent } from './number-validity/number-validity.component';
import { SuccessComponent } from './number-validity/success/success.component';
import { WarningComponent } from './number-validity/warning/warning.component';
import { CockpitComponent } from './shopping-cart/cockpit/cockpit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './shopping-cart/shopping-item/shopping-item.component';
import { EntryComponent } from './travel-media/entry/entry.component';
import { MovieComponent } from './travel-media/movie/movie.component';
import { SongComponent } from './travel-media/song/song.component';
import { TravelMediaComponent } from './travel-media/travel-media.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AssignmentssRoutingModule } from './assignments-routing.module';

@NgModule({
  declarations: [
    AssignmentsComponent,
    ListComponent,
    CounterComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    NumberValidityComponent,
    SuccessComponent,
    WarningComponent,
    ShoppingCartComponent,
    CockpitComponent,
    ShoppingItemComponent,
    TravelMediaComponent,
    EntryComponent,
    SongComponent,
    MovieComponent,
    FavouritesComponent,
    FavoriteItemComponent,
    UserProfileComponent,
    DataTransformComponent,
    ReversePipe,
    SortPipe,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentssRoutingModule,
  ],
  exports: [
    EvenComponent,
    OddComponent,
    GameControlComponent,
    SuccessComponent,
    WarningComponent,
    CockpitComponent,
    ShoppingItemComponent,
    EntryComponent,
    SongComponent,
    MovieComponent,
    FavoriteItemComponent,
    ReversePipe,
    SortPipe,
  ],
})
export class AssignmentsModule {}
