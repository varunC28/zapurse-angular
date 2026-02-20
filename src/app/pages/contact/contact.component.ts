import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { SuccessModalComponent } from '../../components/ui/success-modal/success-modal.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, ParticlesComponent, SuccessModalComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;
  readonly MessageSquare = MessageSquare;
  readonly ArrowRight = ArrowRight;

  showSuccessModal = signal(false);

  onSubmit(form: NgForm) {
    this.showSuccessModal.set(true);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      this.showSuccessModal.set(false);
      form.resetForm();
    }, 3000);
  }

  contactInfo = [
    {
      icon: MapPin,
      bg: "bg-blue-500/10 dark:bg-blue-500/20",
      title: "Head Office",
      content: "Atishay Limited, Plot No: 36, Maharana Pratap Nagar, Zone-I, Bhopal, Madhya Pradesh – 462011",
    },
    {
      icon: Phone,
      bg: "bg-green-500/10 dark:bg-green-500/20",
      title: "Phone",
      content: "+91 62626 29831 (Mon – Sat, 10am – 6pm)",
    },
    {
      icon: Mail,
      bg: "bg-purple-500/10 dark:bg-purple-500/20",
      title: "Email",
      content: "support@zapurse.in / partners@zapurse.in",
    },
  ];
}
