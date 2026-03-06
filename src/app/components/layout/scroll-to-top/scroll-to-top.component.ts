import { Component, HostListener, signal, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule, ChevronUp } from 'lucide-angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SmoothScrollService } from '../smooth-scroll/smooth-scroll.service';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent implements OnInit {
  isVisible = signal(false);
  readonly ChevronUp = ChevronUp;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private smoothScroll: SmoothScrollService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        // Use immediate scroll for route changes
        this.smoothScroll.scrollTo(0, { immediate: true });
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible.set(window.scrollY > 300);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.smoothScroll.scrollTo(0);
    }
  }
}
