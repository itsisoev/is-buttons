import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationButtonVinodRoundComponent } from './notification-button-vinod-round.component';

describe('NotificationButtonVinodRoundComponent', () => {
  let component: NotificationButtonVinodRoundComponent;
  let fixture: ComponentFixture<NotificationButtonVinodRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationButtonVinodRoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationButtonVinodRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
