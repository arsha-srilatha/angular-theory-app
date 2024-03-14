import { Component, Input } from '@angular/core';
import { Type2 } from '../note-details/type2.model';
import { DetailsService } from '../details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css'],
})
export class Type2Component {
  details: Type2;
  topic: string;
  selectedSubType = 'none';

  constructor(
    private srvdetails: DetailsService,
    private route: ActivatedRoute
  ) {
    this.topic = this.route.snapshot.params['topic'];
    this.srvdetails.detailsType2.forEach((item) => {
      if (item.title == this.topic) {
        this.details = item;
      }
    });
  }
  selectSubType(selected: string) {
    this.selectedSubType = selected;
  }

  ngOnInit(): void {}
}
