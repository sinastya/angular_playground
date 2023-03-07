import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  isDisabled = false;

  @Input()
  btnName: string = 'default-btn-test';

  @Output()
  onClick = new EventEmitter<string>();

  onButtonClick() {
    this.onClick.emit(this.btnName);
  }
}
