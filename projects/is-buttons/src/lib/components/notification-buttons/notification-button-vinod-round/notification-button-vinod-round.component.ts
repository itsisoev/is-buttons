import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-button-vinod-round',
  templateUrl: './notification-button-vinod-round.component.html',
  styleUrl: './notification-button-vinod-round.component.css',
})
export class NotificationButtonVinodRoundComponent {
  @Input() width: string = '50px';
  @Input() height: string = '50px';
}
