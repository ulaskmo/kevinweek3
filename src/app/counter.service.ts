import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => (value > 0 ? value - 1 : 0));
  }

  getCount() {
    return this.count;
  }
}