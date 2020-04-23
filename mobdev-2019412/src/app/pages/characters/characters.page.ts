import { Component, OnInit } from '@angular/core';	
import { Router } from '@angular/router';	
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: any;
  offset = 0;
 
 
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      
     this.loadCharacters();
      
  }

  loadCharacters(loadMore = false, event?){

    if (loadMore) {
      this.offset += 10;
    }

     this.characters = this.api.getCharacters(this.offset);   
    
  }

  openDetails(character) {
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    console.log(characterId);
  }
}
