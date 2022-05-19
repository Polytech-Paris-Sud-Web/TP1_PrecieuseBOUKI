import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Article, createArticle} from "./article.model";

@Injectable({
  providedIn: 'root'
})
export class ArticleService { //affiche la liste des articles // gestion d'article

  constructor(private httpClient : HttpClient) { //private pour être sur de le pas le modifier
}
  public getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>("http://localhost:3000/articles");
}
  //Delete service wich permit to remove an Article
  public deleteArticle(id: string) {
      return this.httpClient.delete("http://localhost:3000/articles/"+id);
  }

  public createArticle(article : createArticle){
    return this.httpClient.post<Article[]>("http://localhost:3000/articles",article);
  }


  //fetch fourni une promise --> requête qui est fourni de manière asynchrone
  //Observable plus complexe et plus de capacité (voir rx.io reactiveX c'est une norme selon les différents langages)
  /*
  Permet de traiter de la donnée en flux, on peut recevoir plusieurs données au cours du temps
  promise s'exécute puis se termine et on reçoit pas d'autre donnée
  * */
  //aka refactoring
  /*public getArticles() : Article[] {
    return [{
      title: 'My First Article',
      content: 'Hello World',
      author: 'Orangefire'
    }, {
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      author: 'Orangefire'
    }, {
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      author: 'Orangefire'
    }];
}
  articles(): Article[] {
    return this.getArticles();
}*/

  // ---une autre façon de faire
  /*articles(): Article[] {
    return [
    {title: 'My First Article', content : 'Hello World', author : 'Précieuse BOUKI'},
    {title: 'My Second Article', content : 'Hello World', author : 'Précieuse BOUKI'},
    {title: 'My Third Article', content : 'Hello World', author : 'Précieuse BOUKI'}];
}*/

  // ---une autre façon de faire
  /*articles(): Article[] {

    return [{
      title: 'My First Article',
      content: 'Hello World',
      author: 'Orangefire'
    }, {
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      author: 'Orangefire'
    }, {
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      author: 'Orangefire'
    }];
}*/

}
