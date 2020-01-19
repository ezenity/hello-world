import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLikesComponent } from './facebook-likes.component';

describe('FacebookLikesComponent', () => {
  let component: FacebookLikesComponent;
  let fixture: ComponentFixture<FacebookLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
