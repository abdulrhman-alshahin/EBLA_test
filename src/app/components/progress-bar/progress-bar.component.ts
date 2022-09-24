import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `<div style="position: relative">
    <mat-progress-bar mode="determinate" [value]="value"></mat-progress-bar>
    <span
      style="position: absolute; top: 0.5em; color: white"
      [ngStyle]="{ left: value / 2 - 5 + '%' }"
      >{{ value.toFixed(2) }}%</span
    >
  </div>`,
  styles: [
    `
      mat-progress-bar {
        height: 2em;
        border-radius: 5px;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number = 100;
  constructor() {}

  ngOnInit(): void {}
}
