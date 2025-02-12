import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week3-angular';

  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}