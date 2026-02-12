import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Target, Eye, Globe2, Trophy, ShieldCheck, MapPin } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { NumberTickerComponent } from '../../components/magicui/number-ticker/number-ticker.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent, NumberTickerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly Target = Target;
  readonly Eye = Eye;
  readonly Globe2 = Globe2;
  readonly Trophy = Trophy;
  readonly ShieldCheck = ShieldCheck;
  readonly MapPin = MapPin;

  stats = [
    { label: "Trusted by Customers", value: 1000, suffix: "+" },
    { label: "States Covered", value: 22, suffix: "+" },
    { label: "Monthly Transactions", value: 3500, suffix: "+" }, // Note: Ticker handles numbers, suffix is separate
    { label: "Trusted Operators", value: 20, suffix: "+" },
  ];

  // Need to handle "1M+" correctly if value is just 1. The suffix works.

  missionVision = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To create the largest and most trusted network of technology-enabled agents who provide every citizen with easy access to financial services.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "A digitally inclusive India where banking, payments, and government services are available at every doorstep.",
    },
  ];

  atishayStats = [
    { label: "BSE Listed Company", icon: Globe2 },
    { label: "ISO 27001 Certified", icon: Trophy },
    { label: "CMMI Level 3", icon: ShieldCheck },
    { label: "Pan-India Presence", icon: MapPin },
  ];
}
