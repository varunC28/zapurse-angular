import {
  Component, OnInit, AfterViewInit, OnDestroy,
  PLATFORM_ID, Inject, inject, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { BlogPost } from '../../../models/blog-post.model';
import { BLOG_CONTENT } from '../../data/blog-content.data';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthorCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.css'
})
export class BlogDetailPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private lenis: Lenis | null = null;
  private route = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  post: BlogPost | null = null;
  notFound = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    private meta: Meta
  ) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const found = BLOG_CONTENT[slug];

    if (found) {
      this.post = found;
      this.title.setTitle(found.metaTitle);
      this.meta.updateTag({ name: 'description', content: found.metaDescription });
      this.meta.updateTag({ name: 'keywords', content: found.metaKeywords });
    } else {
      this.notFound = true;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initLenis();
      this.initAnimations();
    }
  }

  ngOnDestroy(): void {
    this.lenis?.destroy();
    ScrollTrigger.getAll().forEach(t => t.kill());
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ─── Private ────────────────────────────────────────────────────────────────

  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time: number) => {
      this.lenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  private initAnimations(): void {
    gsap.from('.hero-content > *', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.1,
      ease: 'power3.out', delay: 0.3
    });

    gsap.to('.hero-image img', {
      yPercent: 15, ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top', end: 'bottom top', scrub: true
      }
    });

    document.querySelectorAll('.narrative-section').forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      });
      const h2 = section.querySelector('h2');
      const p = section.querySelector('p');
      if (h2) tl.from(h2, { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' });
      if (p) tl.from(p, { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    });
  }
}