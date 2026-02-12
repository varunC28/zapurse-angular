import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-grid-pattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-grid-pattern.component.html',
  styleUrl: './interactive-grid-pattern.component.css'
})
export class InteractiveGridPatternComponent {
  @Input() width = 80;
  @Input() height = 80;
  @Input() squares: [number, number] = [32, 32];
  @Input() className = '';
  @Input() squaresClassName = '';

  hoveredSquare = signal<number | null>(null);

  get gridItems() {
    return Array.from({ length: this.squares[0] * this.squares[1] });
  }

  getX(index: number) {
    return (index % this.squares[0]) * this.width;
  }

  getY(index: number) {
    return Math.floor(index / this.squares[0]) * this.height;
  }

  setHoveredSquare(index: number | null) {
    this.hoveredSquare.set(index);
  }
}
