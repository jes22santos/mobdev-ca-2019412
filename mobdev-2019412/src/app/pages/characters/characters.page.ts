import { Component, OnInit } from '@angular/core';	
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    
    this.router.navigateByUrl(`/tabs/characters/51`);
  }
}
