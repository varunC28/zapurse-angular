import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface ContentItem {
    title: string;
    description: string;
    content?: any;
    image?: string;
    [key: string]: any;
}

@Component({
    selector: 'app-sticky-scroll-reveal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sticky-scroll-reveal.component.html',
    styleUrl: './sticky-scroll-reveal.component.css'
})
export class StickyScrollRevealComponent implements AfterViewInit, OnDestroy {
    @Input() content: ContentItem[] = [];
    @Input() contentClassName: string = '';

    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

    activeCard = 0;
    linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    private isBrowser: boolean;

    get isMobile() {
        return this.isBrowser && window.innerWidth < 1024;
    }

    constructor(
        private cdr: ChangeDetectorRef,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        if (this.isBrowser) {
            // Support both element scroll (for laptop fixed box) and window scroll (for mobile flow)
            window.addEventListener('scroll', this.onScroll, { passive: true });
            window.addEventListener('resize', this.onScroll, { passive: true });

            this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll, { passive: true });

            // Initial check
            setTimeout(() => this.onScroll(), 100);
        }
    }

    ngOnDestroy() {
        if (this.isBrowser) {
            window.removeEventListener('scroll', this.onScroll);
            window.removeEventListener('resize', this.onScroll);
            this.scrollContainer?.nativeElement.removeEventListener('scroll', this.onScroll);
        }
    }

    onScroll = () => {
        if (!this.scrollContainer || !this.isBrowser) return;

        const container = this.scrollContainer.nativeElement;
        const contentDivs = container.querySelectorAll('.content-block');

        if (contentDivs.length === 0) return;

        // Differentiate between internal scroll (Laptop) and window scroll (Mobile)
        const isInternalScroll = container.scrollHeight > container.clientHeight + 10;

        let closestIndex = 0;

        if (isInternalScroll) {
            // Laptop logic: Focus on internal container scroll
            const triggerZone = container.getBoundingClientRect().top + (container.clientHeight * 0.4);

            if (container.scrollTop < 20) {
                closestIndex = 0;
            } else if (Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 20) {
                closestIndex = contentDivs.length - 1;
            } else {
                let minDistance = Number.MAX_VALUE;
                contentDivs.forEach((div: any, index: number) => {
                    const rect = div.getBoundingClientRect();
                    const blockCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(blockCenter - triggerZone);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                });
            }
        } else {
            // Mobile logic: Focus on window viewport
            const triggerPoint = window.innerHeight / 2;
            let minDistance = Number.MAX_VALUE;

            contentDivs.forEach((div: any, index: number) => {
                const rect = div.getBoundingClientRect();
                const blockCenter = rect.top + rect.height / 2;
                const distance = Math.abs(blockCenter - triggerPoint);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });
        }

        if (this.activeCard !== closestIndex) {
            this.activeCard = closestIndex;
            this.cdr.detectChanges();
        }
    }
}
