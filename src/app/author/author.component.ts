import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../author.model';

import { ActivatedRoute } from '@angular/router';
import { ArticleService} from '../article.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() author?: Author;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.articleService.getAuthor(params['name']).subscribe(value => this.author = value);
    })
  }
}

