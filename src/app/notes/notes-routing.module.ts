import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesComponent } from './notes.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

const notesRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: 'details', component: NoteDetailsComponent },
      { path: 'details/1/:topic', component: Type1Component },
      { path: 'details/2/:topic', component: Type2Component },
      { path: 'details/3/:topic', component: Type3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
