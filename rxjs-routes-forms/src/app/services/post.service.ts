import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from '../components/http/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom', 'cstm.prms.exampel');
    searchParams = searchParams.append('name', 'lazar');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({
            'custom-header': 'cstmHdr12XX',
          }),
          params: searchParams,
        }
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
      postData,
      {
        headers: new HttpHeaders({
          'custom-header': 'post lzr',
        }),
      }
    );
  }

  clearPosts() {
    this.http
      .delete(
        'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
