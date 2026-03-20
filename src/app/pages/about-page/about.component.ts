import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { LucideAngularModule, Target, Eye, Globe2, Trophy, ShieldCheck, MapPin } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { NumberTickerComponent } from '../../components/ui/number-ticker/number-ticker.component';
import { NgxGlobeComponent } from '@omnedia/ngx-globe';

@Component({
  selector: 'app-about',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ParticlesComponent, NumberTickerComponent, NgxGlobeComponent],
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

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About Us | Zapurse – Mobile & DTH Recharge Platform India');
    this.meta.updateTag({ name: 'description', content: 'Learn about Zapurse, a trusted mobile recharge service provider and DTH recharge platform in India. Part of Atishay Limited, enabling seamless prepaid mobile recharge online and DTH recharge online.' });
    this.meta.updateTag({ name: 'keywords', content: 'mobile recharge service provider, dth recharge platform, top multi recharge company in india, Zapurse about' });
  }

  stats = [
    { label: "Trusted by Customers", value: 5000, suffix: "+" },
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
