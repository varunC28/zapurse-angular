import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Facebook, Instagram, Linkedin } from 'lucide-angular';
import { DatePipe } from '@angular/common';
import { ParticlesComponent } from '../../ui/particles/particles.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, DatePipe, ParticlesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Linkedin = Linkedin;

  currentYear = new Date();

  socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/Zapurse/" },
    { icon: Instagram, url: "https://www.instagram.com/zapurse_recharge/" },
    { icon: Linkedin, url: "https://www.linkedin.com/showcase/zapurse" }
  ];

  serviceLinks = [
    { name: "Mobile Recharge", path: "/services", fragment: "recharge" },
    { name: "DTH Recharge", path: "/services", fragment: "dth" }
  ];

  discoverLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Terms & Conditions", path: "/legal/terms" },
    { name: "Privacy Policy", path: "/legal/privacy" },
    { name: "Refund Policy", path: "/legal/refund" },
    { name: "FAQ", path: "/legal/faq" }
  ];
}
