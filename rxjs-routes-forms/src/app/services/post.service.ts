import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from '../components/http/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((response) => {
          let posts: Post[] = [];
          for (let key in response) {
            posts.push({ ...response[key], key });
          }
          return posts;
        })
      );
  }

  createPost(postData: Post) {
    return this.http.post<{ name: string }>(
      'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    );
  }
}
