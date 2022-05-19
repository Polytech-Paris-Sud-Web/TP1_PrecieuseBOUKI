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
  /* ----liste en dure de quelques articles dans articleS----
   articles = [
    {title: 'My First Article', content : 'Hello World', author : 'Précieuse BOUKI'},
    {title: 'My Second Article', content : 'Hello World', author : 'Précieuse BOUKI'},
    {title: 'My Third Article', content : 'Hello World', author : 'Précieuse BOUKI'}];*/

  //articles?:Article [] = []; // 1 tableau d'article composé de plusieurs objets de type article

  //articles?:Observable<Article[]> = of([]); // par défaut quand le composant s'instancie il reçoit un tableau

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
