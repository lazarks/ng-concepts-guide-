import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  posts!: Post[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

    this.getPosts();
  }

  getPosts() {
    this.http
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
      )
      .subscribe((response: Post[]) => {
        this.posts = response;
      });
  }

  onPostCreated() {
    let postData = this.postForm.value;
    this.http
      .post<{ name: string }>(
        'https://ng-concepts-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((response) => {
        this.getPosts();
      });
    // console.log(postData);
    this.postForm.reset();
  }
}
