 import { Component, OnInit } from '@angular/core';
import { Post } from '../Models';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo:string="https://www.shutterstock.com/image-vector/vector-spa-leaf-flower-blue-abstract-214312477"
  etudiants:string[]=[];
  posts:Post[]=[];
  nom:string="mon composant";
  displayed:boolean=true;
  constructor( private service:UsersService, private post:PostsService) { }

  ngOnInit(): void {
    this.etudiants = this.service.getStudent();
    this.post.getPosts().subscribe
    ( data => {
      this.posts = data;
    });


  }

  display(){
    this.displayed = !this.displayed;
    alert("Merci bq Angular");
  }

}
