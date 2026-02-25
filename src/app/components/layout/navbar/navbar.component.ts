import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, ChevronDown, Phone } from 'lucide-angular';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { SmoothScrollService } from '../../../services/smooth-scroll.service';

interface NavItem {
  name: string;
  path: string;
  fragment?: string;
}

interface NavLink {
  name: string;
  path: string;
  isDropdown?: boolean;
  items?: NavItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    ThemeToggleComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private smoothScroll: SmoothScrollService
  ) { }

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  openDropdown = signal<string | null>(null);

  readonly Menu = Menu;
  readonly X = X;
  readonly ChevronDown = ChevronDown;
  readonly Phone = Phone;

  navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    {
      name: 'Zapurse Policies',
      path: '#',
      isDropdown: true,
      items: [
        { name: 'Privacy Policy', path: '/legal/privacy' },
        { name: 'Terms & Conditions', path: '/legal/terms' },
        { name: 'Refund & Cancellation', path: '/legal/refund' },
      ],
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    document.body.style.overflow = 'unset';
  }

  toggleDropdown(name: string) {
    this.openDropdown.update(current => current === name ? null : name);
  }

  onLogoClick(event: MouseEvent) {
    if (this.router.url === '/' || this.router.url === '/#' || this.router.url.includes('#hero')) {
      event.preventDefault();
      this.smoothScroll.scrollTo(0);
    }
  }
}
