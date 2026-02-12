import { Component, HostListener, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
  isVisible = signal(false);
  readonly ChevronUp = ChevronUp;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible.set(window.scrollY > 300);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
