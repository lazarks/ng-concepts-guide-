import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
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
        observe: 'body',
      }
    );
  }

  clearPosts() {
    this.http
      .delete(
        'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((response) => {
          if (response.type === HttpEventType.Sent) {
            console.log('request sent');
          }
          if (response.type === HttpEventType.Response) {
            console.log(response);
          }
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
