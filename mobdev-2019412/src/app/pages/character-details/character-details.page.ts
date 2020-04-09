import { Component, OnInit } from '@angular/core';	
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.http.get(`https://breakingbadapi.com/api/characters/${id}`).subscribe(res => {
      this.character = res;
    });
  }

}
