import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardBackgroundComponent } from './blog-card-background.component';

describe('BlogCardBackgroundComponent', () => {
  let component: BlogCardBackgroundComponent;
  let fixture: ComponentFixture<BlogCardBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
