import { NgModule } from '@angular/core';
import { NotificationButtonVinodComponent } from './components/notification-buttons/notification-button-vinod/notification-button-vinod.component';
import { CommonModule } from '@angular/common';
import { NotificationButtonVinodRoundComponent } from './components/notification-buttons/notification-button-vinod-round/notification-button-vinod-round.component';
import { NextArrowButtonComponent } from './components/buttons/next-arrow-button/next-arrow-button.component';
import { ContinueButtonCircleComponentComponent } from './components/buttons/continue-button-circle-component/continue-button-circle-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
    NextArrowButtonComponent,
    ContinueButtonCircleComponentComponent,
  ],
  exports: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
    NextArrowButtonComponent,
    ContinueButtonCircleComponentComponent,
  ],
})
export class MyButtonLibraryModule {}
