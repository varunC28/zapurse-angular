import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContentItem {
    title: string;
    description: string;
    content?: any; // For template or custom component if needed later
    image?: string; // For the image
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
    backgroundColors = [
        "var(--slate-900)",
        "var(--black)",
        "var(--neutral-900)",
    ];
    linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    private scrollListener!: () => void;

    constructor(private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.scrollListener = () => this.onScroll();
        const el = this.scrollContainer.nativeElement;
        el.addEventListener('scroll', this.scrollListener, { passive: true });
        this.onScroll(); // Initial check
    }

    ngOnDestroy() {
        if (this.scrollListener && this.scrollContainer) {
            this.scrollContainer.nativeElement.removeEventListener('scroll', this.scrollListener);
        }
    }

    onScroll() {
        if (!this.scrollContainer) return;

        const el = this.scrollContainer.nativeElement;
        // Simple logic based on scroll percentage of each card's "zone"
        // Assuming each card text block is roughly viewport height or enough to scroll through.

        // We want to find which card block is closest to the top of the viewport/container
        // A better approach for the Aceternity effect (which changes as you scroll specifically to that section):
        // Calculate distance of each content block from top of container.

        const relativeScroll = el.scrollTop;
        const viewportHeight = el.clientHeight;

        // The content blocks. 
        // We can query them or just assume they are equal height if we style them so. 
        // But let's be dynamic.
        const contentDivs = el.querySelectorAll('.content-block');

        let closestIndex = 0;
        let minDistance = Number.MAX_VALUE;

        contentDivs.forEach((div: any, index) => {
            // distance from top of container
            const offsetTop = div.offsetTop;
            const distance = Math.abs(relativeScroll - offsetTop);

            // Specifically we want the one that is currently "in focus" (e.g., near top 1/3)
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        // Using a simpler breakpoint approach similar to the React version often used:
        // It creates breakpoints based on content length. 
        // Let's stick to the distance logic, but bias it slightly to the top.

        // Let's refine: The React version uses useMotionValueEvent and calculates based on scroll progress.
        // Here we can just check which element is closest to the top padding.

        if (this.activeCard !== closestIndex) {
            this.activeCard = closestIndex;
            this.cdr.detectChanges();
        }
    }
}
