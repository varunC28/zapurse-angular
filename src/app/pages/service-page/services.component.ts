import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { LucideAngularModule, Smartphone, Monitor, ArrowRight } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly ArrowRight = ArrowRight;
  showVideoModal = false;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Instant Mobile Recharge Online | All DTH Recharge for Online');
    this.meta.updateTag({ name: 'description', content: 'Zapurse makes instant mobile recharge online and all DTH recharge for online simple and reliable. Enjoy quick transactions, secure payments without any extra fees or complicated steps.' });
    this.meta.updateTag({ name: 'keywords', content: 'Instant Mobile Recharge Online, All DTH Recharge for Online' });
  }
  currentVideoSrc = '';

  services = [
    {
      id: 'recharge',
      title: 'Mobile Recharge',
      description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
      features: ['99.9% uptime', 'Covers all operators', 'Instant confirmation'],
      icon: Smartphone,
      color: 'bg-[#217095]',
      videoSrc: 'assets/Phone Recharge Video.mp4',
      route: '/mobile-recharge-services'
    },
    {
      id: 'dth',
      title: 'DTH Recharge',
      description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
      features: ['All providers supported', 'Instant activation', 'Best commissions'],
      icon: Monitor,
      color: 'bg-[#4ade80]',
      videoSrc: 'assets/DTH Recharge Video.mp4',
      route: '/dth-recharge-services'
    },
  ];

  openVideoModal(videoSrc: string) {
    this.currentVideoSrc = videoSrc;
    this.showVideoModal = true;
  }

  closeVideoModal() {
    this.showVideoModal = false;
  }
}
