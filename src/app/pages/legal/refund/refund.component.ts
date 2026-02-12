import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalLayoutComponent } from '../legal-layout/legal-layout.component';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule, LegalLayoutComponent],
  templateUrl: './refund.component.html',
  styleUrl: './refund.component.css'
})
export class RefundComponent {
  failedConditions = [
    "The amount is deducted from your bank account, wallet, or card",
    "The recharge or bill payment is not successful",
    "The amount is not passed to the operator or service provider"
  ];

  failedActions = [
    "The deducted amount will be refunded automatically",
    "Refund timelines range between 3–7 working days"
  ];

  pendingConditions = [
    "Final status may take up to 24 hours",
    "Refunds are issued only if the operator confirms failure"
  ];

  exceptions = [
    "Incorrect details entered by the user",
    "Wrong operator or circle selected",
    "Transaction marked successful by operator",
    "User dissatisfaction after success",
    "Duplicate recharge requests",
    "Incorrect or incomplete information provided"
  ];

  processingTimes = [
    { method: "UPI", time: "1–3 business days" },
    { method: "Debit Card / Bank", time: "3–7 business days" }
  ];

  supportRequirements = ["Transaction ID", "Registered mobile number", "Date and time of transaction"];
}
