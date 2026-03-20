import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.css'
})
export class AuthorCardComponent {
  authorName = 'Varun Chaturvedi';
  authorBio = `Varun Chaturvedi is a digital payments expert with extensive experience in the fintech industry. He has worked closely with businesses and technology platforms to simplify digital transactions and build secure payment ecosystems. Varun specializes in payment gateways, fintech platforms, and digital transaction systems, helping organizations adapt to the rapidly evolving digital payments landscape.
<br></br> Through zapurse.in, he shares valuable insights on topics such as digital payments, fintech innovations, mobile recharges, DTH recharges, and secure online payment solutions that make everyday transactions faster and easier.`;
}

