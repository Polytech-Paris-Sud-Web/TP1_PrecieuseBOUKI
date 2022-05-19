import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from "../article.service";
import {Article, createArticle} from "../article.model";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;
  @Output()
  newArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder,private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit(): void {

  }

  createArticle() {
    const {title, content, author} = this.articleForm.value;
    const newArticle : createArticle = {
       title,
      content,
      author
     };
    this.articleService.createArticle(newArticle).subscribe();
    this.articleService.getArticles();
  }
}

