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
      role: "Jaipur",
      text: "Great digital payment services in india, they take no commisions and also offer discounts on recharges. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Singh",
      role: "Bhopal",
      text: "Excellent support. Now I've been using Zapurse for past 5 months and I get offers everytime.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Delhi",
      text: "The interface is so easy to use. We can get recharge done in under 30 seconds. Best payment solution for online payments india",
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
