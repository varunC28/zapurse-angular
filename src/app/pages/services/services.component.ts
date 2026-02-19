import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Smartphone, Monitor, ArrowRight } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { VideoModalComponent } from '../../components/ui/video-modal/video-modal.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent, VideoModalComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly ArrowRight = ArrowRight;
  showVideoModal = false;
  currentVideoSrc = '';

  services = [
    {
      id: 'recharge',
      title: 'Mobile Recharge',
      description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
      features: ['99.9% uptime', 'Covers all operators', 'Instant confirmation'],
      icon: Smartphone,
      color: 'bg-[#217095]',
      videoSrc: 'assets/Phone Recharge Video.mp4'
    },
    {
      id: 'dth',
      title: 'DTH Recharge',
      description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
      features: ['All providers supported', 'Instant activation', 'Best commissions'],
      icon: Monitor,
      color: 'bg-[#738233]',
      videoSrc: 'assets/DTH Recharge Video.mp4'
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
