import { Component, Input, OnInit } from '@angular/core';
import { Type1 } from '../../notes/note-details/type1.model';
import { DetailsService } from '../../notes/details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css'],
})
export class Type1Component implements OnInit {
  details: Type1;
  topic: string;
  displayOn: boolean = false;
  displayPage: number = 0;
  constructor(
    private srvdetails: DetailsService,
    private route: ActivatedRoute
  ) {
    this.topic = this.route.snapshot.params['topic'];
    this.srvdetails.detailsType1.forEach((item) => {
      if (item.title == this.topic) {
        this.details = item;
      }
    });
  }

  showLifecycleHooks() {
    this.displayOn = true;
    this.displayPage = 1;
  }

  ngOnInit(): void {}
}
