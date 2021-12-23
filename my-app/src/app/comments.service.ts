import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppComment } from './types/app-comment.type';


@Injectable({ providedIn: 'root' })
export class CommentsService {

  private commentsUrl = 'https://mocki.io/v1/ab129def-c0fd-45b1-8e03-0da309ecc6e9'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /** GET heroes from the server */
  getComments(): Observable<AppComment[]> {
    return this.http.get<AppComment[]>(this.commentsUrl).pipe(
      map(comments => comments),
      catchError(err => of(err))
    );
  }
}
