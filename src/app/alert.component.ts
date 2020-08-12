import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>This is an alert. {{ message }}</div>',
  styles: [`
    div {
      border: .1em solid black;
      background: salmon;
      padding: 1em;
      font-family: sans-serif;
    }
  `]
})

export class AlertComponent {

  @Input() message: string;
  constructor() {

  }
}
