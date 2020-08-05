import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  movies: Post [];
  movie: string [];
  film;
  constructor(private posts: PostService) { }

  ngOnInit() {
    this.posts.getPosts().subscribe(film => this.movies = film);
    this.movie = ['LORD', 'Matrix', 'Looper', 'Pirates of Caribean'];
  }

  printFilm() {
    this.movie.push(this.film);
  }

  deleteFilm(film) {
    for (let i = 0; i < this.movie.length; i++) {
      if (this.movie[i] === film) {
        this.movie.splice(i, 1);
      }
    }
  }
}

