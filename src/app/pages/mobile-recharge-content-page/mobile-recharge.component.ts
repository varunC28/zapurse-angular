import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Smartphone, ShieldCheck, Zap, Wallet, Headphones, CheckCircle2, ArrowLeft } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-mobile-recharge',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ParticlesComponent, RouterLink],
    templateUrl: './mobile-recharge.component.html',
    styleUrl: './mobile-recharge.component.css'
})
export class MobileRechargeComponent {
    readonly Smartphone = Smartphone;
    readonly ShieldCheck = ShieldCheck;
    readonly Zap = Zap;
    readonly Wallet = Wallet;
    readonly Headphones = Headphones;
    readonly CheckCircle2 = CheckCircle2;
    readonly ArrowLeft = ArrowLeft;

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Prepaid Mobile Recharge Online | Fast Mobile Recharge Platform India');
        this.meta.updateTag({ name: 'description', content: 'Recharge your phone easily with Zapurse, a fast mobile recharge platform India users trust. Do prepaid mobile recharge online with secure payments, instant confirmation without extra charges.' });
        this.meta.updateTag({ name: 'keywords', content: 'Prepaid Mobile Recharge Online, Fast Mobile Recharge Platform India' });
    }

    rechargeSteps = [
        { text: 'Enter the mobile number that needs recharge' },
        { text: 'Select the correct telecom operator' },
        { text: 'Choose a suitable recharge plan' },
        { text: 'Complete the payment securely' },
        { text: 'Receive instant recharge confirmation' }
    ];
}
