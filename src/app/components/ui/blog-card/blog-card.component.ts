import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { BlogPost } from '../../../../models/blog-post.model';
import { BlogCardBackgroundComponent } from '../blog-card-background/blog-card-background.component';
import { BlogCardBackgroundAuroraComponent } from '../blog-card-background-aurora/blog-card-background-aurora.component';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet, BlogCardBackgroundComponent, BlogCardBackgroundAuroraComponent],
  styles: [`
    :host { display: block; height: 100%; }

    .blog-content {
      height: 100%;
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 10;
      justify-content: center;
    }

    /* Override global gradient/transparent heading styles inside cards */
    .blog-content h2 {
      margin-bottom: 0.5rem !important;
      color: #ffffff !important;
      background: none !important;
      -webkit-text-fill-color: #ffffff !important;
      background-clip: unset !important;
    }

    .blog-content p {
      color: rgba(255, 255, 255, 0.9) !important;
      margin: 0 !important;
    }

    /* Aurora cards are light backgrounds in light mode */
    a.aurora .blog-content h2,
    a.aurora .blog-content p {
      color: #000000 !important;
      -webkit-text-fill-color: #000000 !important;
    }

    :host-context(html.dark) a.aurora .blog-content h2,
    :host-context(html.dark) a.aurora .blog-content p {
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
    }
  `],
  template: `
    <a
      [routerLink]="['/blog', post.slug]"
      class="block h-full w-full cursor-pointer no-underline text-inherit"
      [class.aurora]="post.cardStyle === 'aurora'">
      @if (post.cardStyle === 'aurora') {
        <app-blog-card-background-aurora>
          <ng-container *ngTemplateOutlet="content" />
        </app-blog-card-background-aurora>
      } @else {
        <app-blog-card-background>
          <ng-container *ngTemplateOutlet="content" />
        </app-blog-card-background>
      }
    </a>

    <ng-template #content>
      <div class="blog-content p-3">
        <h2 class="text-4xl font-black">{{ post.cardTitle }}</h2>
        <p class="text-sm">{{ post.cardExcerpt }}</p>
      </div>
    </ng-template>
  `
})
export class BlogCardComponent {
  @Input({ required: true }) post!: BlogPost;
}