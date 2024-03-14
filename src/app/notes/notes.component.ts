import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  isClicked: boolean;
  @ViewChild('homeNotes') homeNotes: ElementRef;
  constructor() {
    this.homeNotes.nativeElement.style.height = 'max-content';
  }
  loadingImage: boolean = false;

  showLoading() {
    this.loadingImage = true;
    this.homeNotes.nativeElement.style.height = '100vh';
  }
  hideLoading() {
    this.loadingImage = false;
    this.homeNotes.nativeElement.style.height = 'max-content';
  }

  ngOnInit() {}
}
