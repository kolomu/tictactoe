import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button nbButton *ngIf="!value">{{value}}</button>
  <button nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styles: [`
    button {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      font-size: 4rem !important;
    }
    `
  ]
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
