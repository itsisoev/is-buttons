import { Component, Input } from '@angular/core';

@Component({
  selector: 'continue-button-circle',
  templateUrl: './continue-button-circle-component.component.html',
  styleUrl: './continue-button-circle-component.component.css',
})
export class ContinueButtonCircleComponentComponent {
  @Input() width: string = '120px';
  @Input() height: string = '50px';
  @Input() svgWidth: string = '34';
}
