import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WhatsappButtonComponent } from './components/layout/whatsapp-button/whatsapp-button.component';
import { ScrollToTopComponent } from './components/layout/scroll-to-top/scroll-to-top.component';
import { PageBackgroundComponent } from './components/layout/page-background/page-background.component';

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
export class AppComponent {
  title = 'zapurse-ng';
}
