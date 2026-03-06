import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, inject, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxBentoGridComponent, NgxBentoItemComponent } from '@omnedia/ngx-bento-grid';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogCardBackgroundComponent } from '../../components/ui/blog-card-background/blog-card-background.component';
import { BlogCardBackgroundAuroraComponent } from '../../components/ui/blog-card-background-aurora/blog-card-background-aurora.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    NgxBentoGridComponent,
    NgxBentoItemComponent,
    BlogCardBackgroundComponent,
    BlogCardBackgroundAuroraComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.css'
})
export class BlogDetailPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private lenis: Lenis | null = null;
  private breakpointObserver = inject(BreakpointObserver);
  private route = inject(ActivatedRoute);
  private destroy$ = new Subject<void>();

  columns = 4;
  colPattern = [1, 2, 1, 1];
  blogTitle = 'Seamless Connectivity, Redefined.';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    gsap.registerPlugin(ScrollTrigger);

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.columns = 1;
          this.colPattern = [1];
        } else {
          this.columns = 4;
          this.colPattern = [1, 2, 1, 1];
        }
      });
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initLenis();
      this.initAnimations();
    }
  }

  ngOnDestroy(): void {
    if (this.lenis) {
      this.lenis.destroy();
    }
    ScrollTrigger.getAll().forEach(t => t.kill());
    this.destroy$.next();
    this.destroy$.complete();
  }

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
    // Hero Soft-Rise Animation
    gsap.from('.hero-content > *', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    });

    // Parallax Hero Image
    gsap.to('.hero-image img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Staggered Text Entry for Narrative Sections
    const narrativeSections = document.querySelectorAll('.narrative-section');
    narrativeSections.forEach((section) => {
      const headline = section.querySelector('h2');
      const description = section.querySelector('p');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      if (headline) {
        tl.from(headline, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      }

      if (description) {
        tl.from(description, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');
      }
    });

    // Bento Grid Sequential Scale-up
    gsap.from('.bento-grid-item', {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.bento-grid-section',
        start: 'top 75%'
      }
    });
  }
}
