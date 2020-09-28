import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../dto/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.post.id);
  }

}
