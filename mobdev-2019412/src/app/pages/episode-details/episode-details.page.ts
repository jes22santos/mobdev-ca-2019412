import { ApiService } from './../../services/api.service';
import { LikeService } from './../../services/like.service';
import { Component, OnInit } from '@angular/core';	
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: any;
  isLike = false;
  episodeId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeService: LikeService) { }

  ngOnInit() {
      
      this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
 
      this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
      console.log(JSON.stringify(this.episode.episode_id));
       });

       this.likeService.isLike(this.episodeId).then(isLik => {
      this.isLike = isLik;
    });
  }

  likeEpisode() {
    this.likeService.likeEpisode(this.episodeId).then(() => {
      this.isLike = true;
    });
  }
 
  dislikeEpisode() {
    this.likeService.dislikeEpisode(this.episodeId).then(() => {
      this.isLike = false;
    });
  }

}
