import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { timer } from 'rxjs/internal/observable/timer';
import { comments } from './data/comments';
import { AppComment } from './types/app-comment.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}
