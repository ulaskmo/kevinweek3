import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor(public counterService: CounterService) {}
}