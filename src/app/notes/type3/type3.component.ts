import { Component } from '@angular/core';
import { Type3 } from '../note-details/type3.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-type3',
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.css'],
})
export class Type3Component {
  details: Type3;
  topic: string;
  selectedSubTopic: string;
  selectedPoint: string;
  constructor(
    private srvdetails: DetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.topic = this.route.snapshot.params['topic'];
    this.srvdetails.detailsType3.forEach((item) => {
      if (item.title == this.topic) {
        this.details = item;
      }
    });
  }

  selectSubType(selected: string) {
    this.selectedSubTopic = selected;
  }
}
