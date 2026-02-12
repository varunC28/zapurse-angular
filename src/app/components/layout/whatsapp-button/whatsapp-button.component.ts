import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent implements OnInit {
  readonly MessageCircle = MessageCircle;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.loadExternalScript('https://www.noupe.com/embed/019c328c735e7f3b97607bc9d08f7070619f.js');
  }

  private loadExternalScript(url: string) {
    const script = this.renderer.createElement('script');
    script.src = url;
    script.async = true;
    this.renderer.appendChild(this.document.body, script);
  }
}
