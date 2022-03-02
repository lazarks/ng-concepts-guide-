import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });

    this.getPosts();
  }

  getPosts() {
    this.postService.fetchPosts().subscribe((response: Post[]) => {
      this.posts = response;
    });
  }

  onPostCreated() {
    let postData: Post = this.postForm.value;
    this.postService.createPost(postData).subscribe((response) => {
      this.getPosts();
    });
    this.postForm.reset();
  }

  onClearPosts() {
    this.postService.clearPosts();
  }
}
