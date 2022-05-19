import {Component, OnInit,Output, Input, EventEmitter} from '@angular/core';
import {Article} from "../article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  //article: { title: string, content: string, author: string } | undefined;
  article?:Article; // on utilise le type décrit dans le fichier article.model.ts pour pouvoir le réutilisier partout après

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter(); //evenement

  delete(){
    this.deletedArticle.emit(this.article);
  }

  ngOnInit(): void {

  }

  /*
  ----part2----
  @Input("title") title : string | undefined;
  @Input("customContent") content : string | undefined;
  @Input("authors") authors : string | undefined;

  ----part 1----
  readonly title: string;
  readonly content: string;
  readonly authors: string;

  constructor(){
    this.title = 'First Article';
    this.content = 'Hello World';
    this.authors = 'Précieuse BOUKI';
  }
   */




}
