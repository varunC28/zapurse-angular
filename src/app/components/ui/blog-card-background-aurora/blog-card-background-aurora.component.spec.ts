import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardBackgroundAuroraComponent } from './blog-card-background-aurora.component';

describe('BlogCardBackgroundAuroraComponent', () => {
  let component: BlogCardBackgroundAuroraComponent;
  let fixture: ComponentFixture<BlogCardBackgroundAuroraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardBackgroundAuroraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardBackgroundAuroraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
