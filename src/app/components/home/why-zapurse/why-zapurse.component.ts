import { Component } from '@angular/core';
import { LucideAngularModule, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-angular';
import { ParticlesComponent } from '../../ui/particles/particles.component';

@Component({
  selector: 'app-why-zapurse',
  standalone: true,
  imports: [LucideAngularModule, ParticlesComponent],
  templateUrl: './why-zapurse.component.html',
  styleUrl: './why-zapurse.component.css'
})
export class WhyZapurseComponent {

  // 

  features = [
    {
      icon: CheckCircle2,
      title: "Zero Platform Fees",
      description: "Why pay extra for recharges? While other apps charge ₹3–₹5 as a convenience fee, we charge zero."
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description: "Latest security protocols ensuring 100% safe transactions for you and your customers."
    },
    {
      icon: Users,
      title: "First-Time User Discount",
      description: "Get an instant ₹11 off on your very first recharge—no conditions, no hidden charges."
    },
    {
      icon: Zap,
      title: "DTH Recharge",
      description: "Get 2.5% off on every DTH Recharge with Zapurse and get GST invoice for every transaction."
    }
  ];
}
