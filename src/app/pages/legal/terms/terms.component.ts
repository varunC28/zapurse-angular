import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalLayoutComponent } from '../legal-layout/legal-layout.component';
import { LucideAngularModule, Gavel, UserCheck, ScrollText, ShieldAlert, Scale } from 'lucide-angular';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    CommonModule,
    LegalLayoutComponent,
    LucideAngularModule
  ],
  templateUrl: './terms.component.html'
})
export class TermsComponent {


  sections = [
    {
      icon: Gavel,
      title: 'Acceptance of Terms',
      desc: 'By accessing or using the Zapurse platform, you agree to comply with and be bound by these Terms.'
    },
    {
      icon: UserCheck,
      title: 'Agent Registration',
      desc: 'To become a Zapurse agent, you must provide accurate and complete information.'
    },
    {
      icon: ScrollText,
      title: 'Services Provision',
      desc: 'Zapurse provides AEPS, DMT, and Bill Payments and may change services anytime.'
    },
    {
      icon: ShieldAlert,
      title: 'User Conduct',
      desc: 'You agree not to misuse the platform or engage in unlawful activities.'
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      desc: 'Zapurse shall not be liable for indirect or consequential damages.'
    }
  ];
}
