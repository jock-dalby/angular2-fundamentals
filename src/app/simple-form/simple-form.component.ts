import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input 
      #myInput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{mousedown: isMouseDown}"
      (mousedown)="isMouseDown = true"
      (mouseup)="isMouseDown = false"
      (mouseleave)="isMouseDown = false">
    <button (click)="update.emit({text: message})">Update message</button>
  `,
  styles: [`
  :host {
    display: flex;
    flex-direction: column;
  }

  /*Styles defined inside a component are isolated to only inside the components*/

  input:focus {
    font-weight: bold;
    outline: none;
  }

  .mousedown {
    border: 2px solid green;
  }

  button {
    border: none;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  private isMouseDown = false;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
