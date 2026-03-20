import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { BlogCardComponent } from '../../components/ui/blog-card/blog-card.component';
import { BLOG_POSTS } from '../../data/blog-content.data';
import { BlogPost } from '../../../models/blog-post.model';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [
    CommonModule,
    ParticlesComponent,
    BlogCardComponent,
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent implements OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private destroy$ = new Subject<void>();

  readonly posts: BlogPost[] = BLOG_POSTS;

  columns = 5;
  colPattern = [1, 2, 1, 1, 2];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Zapurse Blog | News, Guides & Updates');
    this.meta.updateTag({
      name: 'description',
      content: 'Read the Zapurse blog for fintech insights, recharge guides, product updates, and tips for saving on mobile and DTH recharges.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Zapurse blog, fintech blog, mobile recharge tips, DTH recharge tips, recharge offers, digital payments'
    });

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: BreakpointState) => {
        this.columns = result.matches ? 1 : 5;
        this.colPattern = result.matches ? [1] : [1, 2, 1, 1, 2];
      });
  }

  getColSpan(index: number): string {
    const span = this.colPattern[index % this.colPattern.length] ?? 1;
    return span > 1 ? `span ${span}` : 'auto';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}