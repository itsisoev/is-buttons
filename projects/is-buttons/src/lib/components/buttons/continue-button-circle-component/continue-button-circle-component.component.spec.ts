import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueButtonCircleComponentComponent } from './continue-button-circle-component.component';

describe('ContinueButtonCircleComponentComponent', () => {
  let component: ContinueButtonCircleComponentComponent;
  let fixture: ComponentFixture<ContinueButtonCircleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueButtonCircleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueButtonCircleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
