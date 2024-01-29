import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  data:any [] = []

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getComments().subscribe((comments:any[''])=>{
      this.data = comments
    })
  }
}
