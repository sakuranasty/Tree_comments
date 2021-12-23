import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommentsService } from '../comments.service';
import { AppComment } from '../types/app-comment.type';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  constructor(private readonly service: CommentsService) { }

  comments$: Observable<AppComment[]> = this.service.getComments().pipe(
    map(comments => comments)
  );

}
