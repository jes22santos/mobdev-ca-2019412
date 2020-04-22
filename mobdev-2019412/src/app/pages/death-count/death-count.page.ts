import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {

    deaths: Observable<any>;
    name: string = '';
    

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSearchChange(event){
      
      this.name = event.target.value;
      this.deaths = this.api.searchDeath(this.name); 
      
  }

}
