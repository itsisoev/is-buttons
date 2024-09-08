import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-button-vinod',
  templateUrl: './notification-button-vinod.component.html',
  styleUrl: './notification-button-vinod.component.css',
})
export class NotificationButtonVinodComponent {
  @Input() width: string = '200px';
  @Input() height: string = '40px';
}
