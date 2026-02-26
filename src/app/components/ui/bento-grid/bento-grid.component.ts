import { Component, OnDestroy, inject } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'; // Fixed import
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxBentoGridComponent, NgxBentoItemComponent } from '@omnedia/ngx-bento-grid';

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [NgxBentoGridComponent, NgxBentoItemComponent],
  templateUrl: './bento-grid.component.html',
  styleUrl: './bento-grid.component.css'
})
export class BentoGridComponent implements OnDestroy {
  // Inject BreakpointObserver directly
  private breakpointObserver = inject(BreakpointObserver);

  colPattern: number[] = [1, 2, 2];
  columns = 3;
  destroy$ = new Subject<void>();

  constructor() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(takeUntil(this.destroy$))
      // Added BreakpointState type to result
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.columns = 1;
          this.colPattern = [1];
        } else {
          this.columns = 3;
          this.colPattern = [1, 2, 2];
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
