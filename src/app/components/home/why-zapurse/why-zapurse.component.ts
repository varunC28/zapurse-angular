import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-angular';
import { ParticlesComponent } from '../../ui/particles/particles.component';
import { StickyScrollRevealComponent } from '../../ui/sticky-scroll-reveal/sticky-scroll-reveal.component';

@Component({
  selector: 'app-why-zapurse',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent, StickyScrollRevealComponent],
  templateUrl: './why-zapurse.component.html',
  styleUrl: './why-zapurse.component.css'
})
export class WhyZapurseComponent {

  features = [
    {
      icon: CheckCircle2,
      title: "Zero Platform Fees",
      description: "Why pay extra for recharges? While other apps charge ₹3–₹5 as a convenience fee, we charge zero.",
      image: "assets/why-zapurse-images/1.jpg"
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description: "Latest security protocols ensuring 100% safe transactions for you and your customers.",
      image: "assets/why-zapurse-images/2.jpg"
    },
    {
      icon: Users,
      title: "First-Time User Discount",
      description: "Get an instant ₹11 off on your very first recharge—no conditions, no hidden charges.",
      image: "assets/why-zapurse-images/3.jpg",

    },
    {
      icon: Zap,
      title: "DTH Recharge",
      description: "Get 2.5% off on every DTH Recharge with Zapurse and get GST invoice for every transaction.",
      image: "assets/why-zapurse-images/4.jpg",

    }
  ];

  get scrollContent() {
    return this.features.map(f => ({
      title: f.title,
      description: f.description,
      image: f.image
    }));
  }
}
