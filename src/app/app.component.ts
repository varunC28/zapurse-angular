import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WhatsappButtonComponent } from './components/ui/whatsapp-button/whatsapp-button.component';
import { ScrollToTopComponent } from './components/layout/scroll-to-top/scroll-to-top.component';
import { PageBackgroundComponent } from './components/layout/page-background/page-background.component';
import { SmoothScrollService } from './components/layout/smooth-scroll/smooth-scroll.service';

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

  constructor(private smoothScrollService: SmoothScrollService) { }

  ngOnInit() {
    this.smoothScrollService.init();
  }
}
