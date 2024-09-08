import { Component, Input } from '@angular/core';

@Component({
  selector: 'next-arrow-button',
  templateUrl: './next-arrow-button.component.html',
  styleUrl: './next-arrow-button.component.css',
})
export class NextArrowButtonComponent {
  @Input() width: string = '120px';
  @Input() height: string = '30px';
}
