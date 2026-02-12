import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Plus, Minus } from 'lucide-angular';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  readonly Plus = Plus;
  readonly Minus = Minus;

  openIndex = signal<number>(0);

  faqData = [
    {
      question: "What is Zapurse?",
      answer: "Zapurse is a secure and easy-to-use mobile app that lets you recharge your mobile, DTH and other prepaid services instantly. It’s designed to provide a smooth, fast, and reliable recharge experience for all users."
    },
    {
      question: "Is Zapurse free to use?",
      answer: "Yes! Downloading and using the Zapurse app is completely free. You only pay for the actual recharge amount."
    },
    {
      question: "How do I download the Zapurse app?",
      answer: "You can download the Zapurse app from the Google Play Store and App Store. Just search for “Zapurse” and tap install."
    },
    {
      question: "How do I make a recharge?",
      answer: `Open the Zapurse app.
Select the service (Mobile, DTH, etc.).
Enter your number and operator.
Choose or enter the recharge amount.
Confirm and pay securely through your preferred payment method.
That’s it! Your recharge is done instantly.`
    },
    {
      question: "What payment methods are accepted?",
      answer: "You can recharge using UPI, Debit/Credit Cards."
    },
    {
      question: "How can I check my recharge status?",
      answer: "After completing your payment, you’ll get an instant confirmation on the app and via SMS. You can also check the ‘Recharge History’ section in the app to track past transactions."
    },
    {
      question: "What should I do if a recharge fails?",
      answer: `If your recharge fails, don’t worry. 
If payment was deducted, it will be automatically refunded to your original payment method within 2–3 working days.`
    },
    {
      question: "Is my payment information safe?",
      answer: "Yes. Zapurse uses secure payment gateways and follows industry-standard encryption to protect your data. Your payment and personal details are always safe."
    },
    {
      question: "Can I get cashback or offers on recharges?",
      answer: "Yes! Zapurse regularly runs special offers, discounts, and cashback deals. Check the app’s ‘Offers’ section for rewards."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through the Help & Support option inside the app or email us at telesales@zapurse.com. Our team will assist you quickly."
    }
  ];

  toggleIndex(index: number) {
    this.openIndex.update(current => current === index ? -1 : index);
  }
}
