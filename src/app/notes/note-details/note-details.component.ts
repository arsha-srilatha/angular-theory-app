import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type1 } from './type1.model';
import { Type2 } from './type2.model';
import { Type3 } from './type3.model';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent {
  menuOptions = [
    { topic: 'Components', type: 1 },
    { topic: 'Databinding', type: 2 },
    { topic: 'Directives', type: 2 },
    { topic: 'Services', type: 1 },
    { topic: 'Routing', type: 2 },
    { topic: 'Observables', type: 1 },
    { topic: 'Forms', type: 3 },
    { topic: 'Pipes', type: 1 },
    { topic: 'HTTPClient', type: 2 },
    { topic: 'Dynamic Components', type: 1 },
    { topic: 'Modules', type: 1 },
  ];
  displayType: number;
  displayTopic: string;
  detailsType1: Type1;
  detailsType2: Type2;
  detailsType3: Type3;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private details: DetailsService
  ) {
    //this.displayType = this.route.snapshot.params['type'];
    //this.displayTopic = this.route.snapshot.params['topic'];
  }
  onSelectTopic(item: { topic: string; type: number }) {
    // this.router.navigate(['/notes/details/'+item.type+'/'+item.topic]);
    this.displayType = item.type;
    this.displayTopic = item.topic;
    if (this.displayType == 1) {
      this.router.navigate(['/notes/details/1/' + item.topic]);
    } else if (this.displayType == 2) {
      console.log('Http Requests called.');
      this.router.navigate(['/notes/details/2/' + item.topic]);
    } else if (this.displayType == 3) {
      this.router.navigate(['/notes/details/3/' + item.topic]);
    }
  }
}
