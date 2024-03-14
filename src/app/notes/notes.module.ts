import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [
    NotesComponent,
    NoteDetailsComponent,
    Type1Component,
    Type2Component,
    Type3Component,
  ],
  imports: [RouterModule, CommonModule, NotesRoutingModule],
  exports: [],
})
export class NotesModule {}
