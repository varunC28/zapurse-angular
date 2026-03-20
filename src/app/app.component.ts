import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WhatsappButtonComponent } from './components/ui/whatsapp-button/whatsapp-button.component';
import { ScrollToTopComponent } from './components/layout/scroll-to-top/scroll-to-top.component';
import { PageBackgroundComponent } from './components/layout/page-background/page-background.component';
import { SmoothScrollService } from './components/layout/smooth-scroll/smooth-scroll.service';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent,
    ScrollToTopComponent,
    PageBackgroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'zapurse-ng';

  constructor(
    private smoothScrollService: SmoothScrollService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    this.smoothScrollService.init();
    this.initAnalyticsPageViews();
  }

  private initAnalyticsPageViews() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        // GA4 SPA page_view tracking
        window.gtag?.('config', 'G-EXV1NLKXBP', { page_path: e.urlAfterRedirects });
      });
  }
}
