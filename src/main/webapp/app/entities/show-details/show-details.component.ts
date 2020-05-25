import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowDetailsService } from './show-details.service';
import { Show } from 'app/core/tvmaze/show.model';
import { Season } from 'app/core/tvmaze/season.model';
import { Cast } from 'app/core/tvmaze/cast.model';

@Component({
  selector: 'jhi-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  showId = this.route.snapshot.params['id'];
  show?: Show;
  seasons: Season[] = [];
  cast: Cast[] = [];

  constructor(
    private router: Router,
    private showService: ShowDetailsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.showService.findById(this.showId).subscribe(show => { this.show = show });
    // get seasons and episodes
    this.showService.findSeasons(this.showId).subscribe(seasons => {
      seasons.forEach(element => {
        this.showService.findEpisodes(element.id).subscribe(episodes => {
          element.episodes = episodes;
          this.seasons.push(element);
        });
      });
    });

    this.showService.findCast(this.showId).subscribe(cast => {
      this.cast = cast;
    })
  }

}
