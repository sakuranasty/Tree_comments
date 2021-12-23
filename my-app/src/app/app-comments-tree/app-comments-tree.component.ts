import { Component, Input, OnInit } from '@angular/core';
import { AppComment } from '../types/app-comment.type';

@Component({
  selector: 'app-comments-tree',
  templateUrl: './app-comments-tree.component.html',
  styleUrls: ['./app-comments-tree.component.scss']
})
export class AppCommentsTreeComponent implements OnInit {
  @Input() comments: AppComment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTitle({ author_name, parent_id, date_time}: AppComment) {
    return `${author_name} ${ parent_id ? 'answered': 'commented'} at ${date_time}`
  }

}
