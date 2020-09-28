import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Post } from '../../dto/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts()
      .subscribe(datos =>{
        this.posts = datos;
      });
  }

  escuchaClick(id:number){
    console.log('Click en: ' + id);
  }
}
