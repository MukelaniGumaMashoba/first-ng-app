import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterv = signal(0);
  increment() {
    this.counterv.update((v) => v + 1);
    console.log('increment');
  }
  decrement() {
    this.counterv.update((v) => v - 1);
    console.log('decrement');
  }
  reset() {
    this.counterv.update((v) => 0);
    console.log('reset');
  }
}
