import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';	
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

  quotes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      //Bring all quotes from api services
      this.quotes = this.api.getQuotes();
  }

  // open quote details, passing the quote ID as parameter
  openDetails(quote) {
    let quoteId = quote.quote_id;
    this.router.navigateByUrl(`/tabs/characters/${quoteId}`);
    
  }

}
