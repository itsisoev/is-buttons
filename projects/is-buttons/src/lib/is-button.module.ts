import { NgModule } from '@angular/core';
import { NotificationButtonVinodComponent } from './components/notification-buttons/notification-button-vinod/notification-button-vinod.component';
import { CommonModule } from '@angular/common';
import { NotificationButtonVinodRoundComponent } from './components/notification-buttons/notification-button-vinod-round/notification-button-vinod-round.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
  ],
  exports: [
    NotificationButtonVinodComponent,
    NotificationButtonVinodRoundComponent,
  ],
})
export class MyButtonLibraryModule {}
