import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommentsTreeComponent } from './app-comments-tree.component';

describe('CommentsTreeComponent', () => {
  let component: AppCommentsTreeComponent;
  let fixture: ComponentFixture<AppCommentsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCommentsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCommentsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
