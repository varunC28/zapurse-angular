import { Component } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../ui/particles/particles.component';

@Component({
  selector: 'app-partners-and-testimonials',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent],
  templateUrl: './partners-and-testimonials.component.html',
  styleUrl: './partners-and-testimonials.component.css'
})
export class PartnersAndTestimonialsComponent {
  readonly Star = Star;

  testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Retailer, Jaipur",
      text: "Zapurse has completely transformed my shop. The recharge success rate is much higher than other portals I've used. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Singh",
      role: "Distributor, Bhopal",
      text: "Excellent support and timely commission payouts. Working with Zapurse is transparent and profitable.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Merchant, Delhi",
      text: "The interface is so easy to use. My staff learned it in one day. DTH recharge is super fast.",
      rating: 4
    }
  ];

  partners = [
    "air_digitv.png",
    "airtel.png",
    "dish-tv.png",
    "jio.png",
    "reliance_bigtv.jpg",
    "sun_direct.png",
    "tata_sky.jpg",
    "videocon.png",
    "vil.png",
    "bsnl.jpg"
  ];

  // Double the partners list for infinite scroll effect
  scrollingPartners = [...this.partners, ...this.partners];
}
