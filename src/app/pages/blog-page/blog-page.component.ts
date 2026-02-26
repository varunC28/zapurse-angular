import { Component, OnDestroy, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBentoGridComponent, NgxBentoItemComponent } from '@omnedia/ngx-bento-grid';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BlogCardBackgroundComponent } from '../../components/ui/blog-card-background/blog-card-background.component';
import { BlogCardBackgroundAuroraComponent } from '../../components/ui/blog-card-background-aurora/blog-card-background-aurora.component';
import { RouterModule } from '@angular/router';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxBentoGridComponent, NgxBentoItemComponent, BlogCardBackgroundComponent, BlogCardBackgroundAuroraComponent, ParticlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent implements OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);
  private destroy$ = new Subject<void>();

  columns = 4;
  colPattern = [1, 2, 1];

  constructor() {
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
