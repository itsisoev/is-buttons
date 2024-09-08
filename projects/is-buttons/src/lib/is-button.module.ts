import { NgModule } from '@angular/core';
import { NotificationButtonVinodComponent } from './components/notification-buttons/notification-button-vinod/notification-button-vinod.component';
import { CommonModule } from '@angular/common';
import { NotificationButtonVinodRoundComponent } from './components/notification-buttons/notification-button-vinod-round/notification-button-vinod-round.component';
import { NextArrowButtonComponent } from './components/buttons/next-arrow-button/next-arrow-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
    NextArrowButtonComponent,
  ],
  exports: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
    NextArrowButtonComponent,
  ],
})
export class MyButtonLibraryModule {}
