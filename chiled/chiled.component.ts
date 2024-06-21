import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chiled',
  standalone: true,
  imports: [],
  templateUrl: './chiled.component.html',
  styleUrl: './chiled.component.scss',
})
export class ChiledComponent {
  @Input() name: string = '';
}
