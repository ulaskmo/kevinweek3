import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  constructor(public counterService: CounterService) {}
}