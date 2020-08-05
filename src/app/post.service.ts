import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http: HttpClient) {}
getPosts(): Observable<Post[]>{
  return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/todos?_limit=5');
}
}
