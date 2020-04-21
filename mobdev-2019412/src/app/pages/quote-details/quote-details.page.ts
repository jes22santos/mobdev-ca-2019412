import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

  quote: any;
  quoteId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
      this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.api.getCharacter(this.quoteId).subscribe(res => {
      this.quote = res[0];
  });
}

}