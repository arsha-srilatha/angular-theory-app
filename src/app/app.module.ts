import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleHighlightDirective } from './all-directives/example-highlight.directive';
import { ButtonHighlightDirective } from './all-directives/button-highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotesModule } from './notes/notes.module';
import { NotesRoutingModule } from './notes/notes-routing.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { AssignmentssRoutingModule } from './assignments/assignments-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleHighlightDirective,
    ButtonHighlightDirective,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
