import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../ui/particles/particles.component';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.css'
})
export class ComparisonComponent {
  sliderPosition = signal(50);
  isDragging = signal(false);

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging.set(true);
    this.updateSliderPosition(event);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging.set(false);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging()) {
      this.updateSliderPosition(event);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.isDragging.set(true);
    this.updateSliderPositionTouch(event);
  }

  @HostListener('document:touchend')
  onTouchEnd() {
    this.isDragging.set(false);
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging()) {
      this.updateSliderPositionTouch(event);
    }
  }

  private updateSliderPosition(event: MouseEvent) {
    const container = document.querySelector('.comparison-container') as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    this.sliderPosition.set(percentage);
  }

  private updateSliderPositionTouch(event: TouchEvent) {
    const container = document.querySelector('.comparison-container') as HTMLElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const touch = event.touches[0];
    if (!touch) return;

    const x = touch.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    this.sliderPosition.set(percentage);
  }
}
