import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  title = 'Counter';
  result = 10;

  disabled = false;

  increase() {
    this.result++;
    this.disabled = this.result === 0;
  }

  decrease() {
    if (this.result > 0) {
      this.result--;
    }
    this.disabled = this.result === 0;
  }
}
