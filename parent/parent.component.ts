import { Component } from '@angular/core';
import { ChiledComponent } from '../chiled/chiled.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChiledComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  name = '';
}
