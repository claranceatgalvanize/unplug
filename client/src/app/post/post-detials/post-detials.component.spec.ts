import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetialsComponent } from './post-detials.component';

describe('PostDetialsComponent', () => {
  let component: PostDetialsComponent;
  let fixture: ComponentFixture<PostDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
