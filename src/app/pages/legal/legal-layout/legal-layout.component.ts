import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ParticlesComponent } from '../../../components/ui/particles/particles.component';

@Component({
  selector: 'app-legal-layout',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './legal-layout.component.html',
  styleUrl: './legal-layout.component.css'
})
export class LegalLayoutComponent implements AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() lastUpdated: string = '';

  @ViewChild('containerRef') containerRef!: ElementRef;
  @ViewChild('titleRef') titleRef!: ElementRef;
  @ViewChild('contentRef') contentRef!: ElementRef;

  private ctx: gsap.Context | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ctx = gsap.context(() => {
        gsap.from(this.titleRef.nativeElement, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
        gsap.from(this.contentRef.nativeElement, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out"
        });
      }, this.containerRef.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
