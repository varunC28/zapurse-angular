import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { WhyZapurseComponent } from '../../components/home/why-zapurse/why-zapurse.component';
import { ServicesGridComponent } from '../../components/home/services-grid/services-grid.component';
import { ComparisonComponent } from '../../components/home/comparison/comparison.component';
import { PartnersAndTestimonialsComponent } from '../../components/home/partners-and-testimonials/partners-and-testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    WhyZapurseComponent,
    ComparisonComponent,
    ServicesGridComponent,
    PartnersAndTestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Mobile Recharge Company in India | Best Online DTH Recharge - Zapurse');
    this.meta.updateTag({ name: 'description', content: 'Zapurse is a reliable mobile recharge company in India offering fast prepaid mobile recharge and best online DTH recharge with best offers and GST invoices on every transaction.' });
    this.meta.updateTag({ name: 'keywords', content: 'Mobile Recharge Company in India, Best Online DTH Recharge' });
  }
}
