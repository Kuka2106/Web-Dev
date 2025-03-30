import { Injectable } from '@angular/core';
import { NewsItem } from '../models/news-item';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newslist : NewsItem[] = [
    {
      id : 1,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/aa.jpg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa"
    },
    {
      id : 2,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/kbtu.jpeg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa"
    },
    {
      id : 3,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/aa.jpg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA  AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa"
    },
    {
      id : 4,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/kbtu.jpeg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa"
    },
    {
      id : 5,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/aa.jpg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa"
    },
    {
      id : 6,
      name : "AAA?",
      description : "AAAAAa",
      image : "../assets/news_images/kbtu.jpeg",
      content : "AAAAAAAAAAAAAAAAAaaaaAAA? AaAAAAAAAAAAAAAAAAAAAAAAA! Aaaaa? AAAAA, AAAAA,aaa aAAAAAA KBTU AaaaaaaaaAaaaaAa, aaaaaaaaaaaa. AAA aaa aaaaaa. AaaaaaaaaaaaAAAAAaaaaaaaaaA, AAAAaa aaa AAAA@!@@@@@ aAaaaa A."
    }
  ]
  constructor() { }

  getNewsList(){
    return this.newslist;
  }
  getNewsById(newsId:number){
    return this.newslist.find((news)=>news.id=newsId);
  }
}
