import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rainbow-button',
  standalone: true,
  templateUrl: './rainbow-button.component.html',
  styleUrl: './rainbow-button.component.css'
})
export class RainbowButtonComponent {
  @Input() label: string = 'Button';
}
