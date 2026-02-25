import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';

@Injectable({
    providedIn: 'root'
})
export class SmoothScrollService implements OnDestroy {
    public lenis: Lenis | undefined;
    private rafId: number | undefined;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    init() {
        if (isPlatformBrowser(this.platformId)) {
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
                this.rafId = requestAnimationFrame(raf);
            };

            this.rafId = requestAnimationFrame(raf);
        }
    }

    scrollTo(target: string | HTMLElement | number, options?: any) {
        this.lenis?.scrollTo(target, options);
    }

    stop() {
        this.lenis?.stop();
    }

    start() {
        this.lenis?.start();
    }

    ngOnDestroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.lenis?.destroy();
    }
}
