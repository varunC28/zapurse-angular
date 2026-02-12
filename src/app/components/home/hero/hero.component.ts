import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { InteractiveGridPatternComponent } from '../../ui/interactive-grid-pattern/interactive-grid-pattern.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, InteractiveGridPatternComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroRef') heroRef!: ElementRef;
  @ViewChild('imageRef') imageRef!: ElementRef;
  @ViewChild('contentRef') contentRef!: ElementRef;

  private ctx: gsap.Context | undefined;
  private mouseMoveHandler: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ctx = gsap.context(() => {
        // Smooth entrance for content
        gsap.from(".hero-text-child", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out"
        });

        // Float animation for image
        if (this.imageRef?.nativeElement) {
          gsap.to(this.imageRef.nativeElement, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      }, this.heroRef.nativeElement);

      this.setupParallax();
    }
  }

  setupParallax() {
    this.mouseMoveHandler = (e: MouseEvent) => {
      if (!this.imageRef?.nativeElement) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(this.imageRef.nativeElement, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", this.mouseMoveHandler);
  }

  scrollToBottom() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
    if (isPlatformBrowser(this.platformId) && this.mouseMoveHandler) {
      window.removeEventListener("mousemove", this.mouseMoveHandler);
    }
  }
}
