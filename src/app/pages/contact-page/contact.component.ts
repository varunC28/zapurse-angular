import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { LucideAngularModule, Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { SuccessModalComponent } from '../../components/ui/success-modal/success-modal.component';
import { Component, signal } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contact Us | Zapurse – Mobile & DTH Recharge');
    this.meta.updateTag({ name: 'description', content: 'Contact Zapurse for mobile recharge and DTH recharge support. Get in touch with our team for prepaid mobile recharge online and DTH recharge online queries. Head office in Bhopal.' });
    this.meta.updateTag({ name: 'keywords', content: 'Zapurse contact, mobile recharge support, DTH recharge support, recharge customer care' });
  }

  async onSubmit(form: NgForm) {
    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_pjbot8i';
    const templateID = 'template_9vi84vf';
    const publicKey = 'KaehrgBhnDHJkReZ0';

    try {
      // 2. Map form values to match your EmailJS Template variables
      const templateParams = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        // to_email: 'recipient@example.com' // Optional: Use if you set {{to_email}} in dashboard
      };

      // 3. Send the email
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Show success UI
      this.showSuccessModal.set(true);

      setTimeout(() => {
        this.showSuccessModal.set(false);
        form.resetForm();
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    }
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
