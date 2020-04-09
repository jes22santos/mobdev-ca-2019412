import { Component, OnInit } from '@angular/core';	
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  characterId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
