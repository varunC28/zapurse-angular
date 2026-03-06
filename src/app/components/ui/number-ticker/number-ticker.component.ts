import { Component, ElementRef, Input, AfterViewInit, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-number-ticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-ticker.component.html',
  styleUrl: './number-ticker.component.css'
})
export class NumberTickerComponent implements AfterViewInit, OnDestroy {
  @Input() value: number = 0;
  @Input() direction: 'up' | 'down' = 'up';
  @Input() delay: number = 0;
  @Input() decimalPlaces: number = 0;
  @Input() className: string = '';

  @ViewChild('ticker') tickerRef!: ElementRef;

  private ctx: gsap.Context | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animate();
    }
  }

  animate() {
    this.ctx = gsap.context(() => {
      const startValue = this.direction === 'down' ? this.value : 0;
      const endValue = this.direction === 'down' ? 0 : this.value;
      const obj = { val: startValue };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(obj, {
            val: endValue,
            duration: 3, // Adjust duration to match spring feel or use reasonable default
            delay: this.delay,
            ease: "power2.out", // Smooth easing
            onUpdate: () => {
              if (this.tickerRef?.nativeElement) {
                this.tickerRef.nativeElement.textContent = Intl.NumberFormat("en-US", {
                  minimumFractionDigits: this.decimalPlaces,
                  maximumFractionDigits: this.decimalPlaces,
                }).format(Number(obj.val.toFixed(this.decimalPlaces)));
              }
            }
          });
          observer.disconnect();
        }
      });

      if (this.tickerRef?.nativeElement) {
        observer.observe(this.tickerRef.nativeElement);
      }

    }, this.tickerRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
