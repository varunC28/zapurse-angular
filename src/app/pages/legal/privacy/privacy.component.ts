import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalLayoutComponent } from '../legal-layout/legal-layout.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, LegalLayoutComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  personalInfo = [
    "Full Name",
    "Mobile Number",
    "Email Address",
    "Address (optional)",
    "KYC information (if required)",
    "Transaction details"
  ];

  autoInfo = [
    "Device information",
    "IP address",
    "Approximate location",
    "Usage data"
  ];

  usageInfo = [
    "Process transactions",
    "Manage accounts",
    "Improve app performance",
    "Send alerts",
    "Prevent fraud",
    "Comply with laws"
  ];
}
