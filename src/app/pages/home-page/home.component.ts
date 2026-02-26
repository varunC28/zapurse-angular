import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

}
