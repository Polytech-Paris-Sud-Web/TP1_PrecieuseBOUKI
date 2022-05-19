import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";
import {Article} from "../article.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles?:Article [] ;
  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((value => {
      this.articles=value; //closure dans un fonction on peut accéder aux contexte extérieurs
    }));
  }

  delete(article: Article) {
    const  id = article.id;
    this.articleService.deleteArticle(id).subscribe(()=> {
      this.articleService.getArticles().subscribe((data)=>{
        this.articles = data;
      })
    });
  }
}
