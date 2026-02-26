import { Component } from '@angular/core';

import { NgxGlobeComponent } from '@omnedia/ngx-globe';

@Component({
  selector: 'app-animated-globe',
  standalone: true,
  imports: [NgxGlobeComponent],
  templateUrl: './animated-globe.component.html',
  styleUrl: './animated-globe.component.css'
})
export class AnimatedGlobeComponent { }