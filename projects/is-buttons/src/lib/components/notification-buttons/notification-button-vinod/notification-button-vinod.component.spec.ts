import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationButtonVinodComponent } from './notification-button-vinod.component';

describe('NotificationButtonVinodComponent', () => {
  let component: NotificationButtonVinodComponent;
  let fixture: ComponentFixture<NotificationButtonVinodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationButtonVinodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationButtonVinodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
