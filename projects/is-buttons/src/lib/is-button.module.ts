import { NgModule } from '@angular/core';
import { NotificationButtonVinodComponent } from './components/notification-buttons/notification-button-vinod/notification-button-vinod.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [NotificationButtonVinodComponent],
  exports: [NotificationButtonVinodComponent],
})
export class MyButtonLibraryModule {}
