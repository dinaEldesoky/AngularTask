import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsComponent } from './movie-lists.component';

describe('MovieListsComponent', () => {
  let component: MovieListsComponent;
  let fixture: ComponentFixture<MovieListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
