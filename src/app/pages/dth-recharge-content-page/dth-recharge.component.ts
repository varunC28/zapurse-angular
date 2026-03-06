import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Monitor, ShieldCheck, Zap, Wallet, Headphones, CheckCircle2, ArrowLeft, TrendingUp, History } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-dth-recharge',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ParticlesComponent, RouterLink],
    templateUrl: './dth-recharge.component.html',
    styleUrl: './dth-recharge.component.css'
})
export class DthRechargeComponent {
    readonly Monitor = Monitor;
    readonly ShieldCheck = ShieldCheck;
    readonly Zap = Zap;
    readonly Wallet = Wallet;
    readonly Headphones = Headphones;
    readonly CheckCircle2 = CheckCircle2;
    readonly ArrowLeft = ArrowLeft;
    readonly TrendingUp = TrendingUp;
    readonly History = History;

    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Online DTH Recharge Service Provider | DTH Recharge Platform');
        this.meta.updateTag({ name: 'description', content: 'Recharge your DTH online with Zapurse, a trusted online DTH recharge service provider and reliable DTH recharge platform offering fast service, secure payments, recharge offers and no hidden charges.' });
        this.meta.updateTag({ name: 'keywords', content: 'DTH Recharge Platform, Online DTH Recharge Service Provider' });
    }

    dthBenefits = [
        { text: 'Quick transaction processing' },
        { text: 'High success rates' },
        { text: 'Immediate recharge status updates' },
        { text: 'Minimal waiting time' },
        { text: 'Stable system performance' }
    ];

    usageSteps = [
        { text: 'Choose their DTH operator' },
        { text: 'Enter recharge details' },
        { text: 'Make secure payments' },
        { text: 'Check previous transactions' }
    ];
}
