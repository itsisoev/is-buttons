import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextArrowButtonComponent } from './next-arrow-button.component';

describe('NextArrowButtonComponent', () => {
  let component: NextArrowButtonComponent;
  let fixture: ComponentFixture<NextArrowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextArrowButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
