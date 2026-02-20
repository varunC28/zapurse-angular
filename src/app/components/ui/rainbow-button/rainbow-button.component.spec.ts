import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowButtonComponent } from './rainbow-button.component';

describe('RainbowButtonComponent', () => {
  let component: RainbowButtonComponent;
  let fixture: ComponentFixture<RainbowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainbowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
