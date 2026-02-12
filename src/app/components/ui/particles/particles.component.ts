import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, Inject, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css'
})
export class ParticlesComponent implements OnInit, OnDestroy, OnChanges {
  @Input() className = '';
  @Input() quantity = 100;
  @Input() staticity = 50;
  @Input() ease = 50;
  @Input() size = 0.4;
  @Input() refresh = false;
  @Input() color = '#ffffff';
  @Input() vx = 0;
  @Input() vy = 0;

  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasContainerRef') canvasContainerRef!: ElementRef<HTMLDivElement>;

  private context: CanvasRenderingContext2D | null = null;
  private circles: any[] = [];
  private mouse = { x: 0, y: 0 };
  private canvasSize = { w: 0, h: 0 };
  private dpr = 1;
  private rafID: number | null = null;
  private resizeTimeout: any;
  private mouseMoveHandler: any;
  private resizeHandler: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.dpr = window.devicePixelRatio || 1;
      this.mouseMoveHandler = (e: MouseEvent) => this.onMouseMove(e);
      window.addEventListener('mousemove', this.mouseMoveHandler);

      this.resizeHandler = () => this.handleResize();
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvas();
      this.animate();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['refresh'] && !changes['refresh'].firstChange) {
      this.initCanvas();
    }
    if (changes['color'] && !changes['color'].firstChange) {
      // trigger re-render if needed or let generic loop handle it
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      window.removeEventListener('mousemove', this.mouseMoveHandler);
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private initCanvas() {
    if (!this.canvasRef || !this.canvasContainerRef) return;

    this.context = this.canvasRef.nativeElement.getContext('2d');
    this.resizeCanvas();
    this.drawParticles();
  }

  private handleResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      this.initCanvas();
    }, 200);
  }

  private onMouseMove(event: MouseEvent) {
    if (this.canvasRef?.nativeElement) {
      const rect = this.canvasRef.nativeElement.getBoundingClientRect();
      const { w, h } = this.canvasSize;
      const x = event.clientX - rect.left - w / 2;
      const y = event.clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        this.mouse.x = x;
        this.mouse.y = y;
      }
    }
  }

  private resizeCanvas() {
    if (!this.canvasContainerRef?.nativeElement || !this.canvasRef?.nativeElement || !this.context) return;

    this.canvasSize.w = this.canvasContainerRef.nativeElement.offsetWidth;
    this.canvasSize.h = this.canvasContainerRef.nativeElement.offsetHeight;

    this.canvasRef.nativeElement.width = this.canvasSize.w * this.dpr;
    this.canvasRef.nativeElement.height = this.canvasSize.h * this.dpr;
    this.canvasRef.nativeElement.style.width = `${this.canvasSize.w}px`;
    this.canvasRef.nativeElement.style.height = `${this.canvasSize.h}px`;
    this.context.scale(this.dpr, this.dpr);

    this.circles = [];
    for (let i = 0; i < this.quantity; i++) {
      const circle = this.circleParams();
      this.drawCircle(circle);
    }
  }

  private circleParams() {
    const x = Math.floor(Math.random() * this.canvasSize.w);
    const y = Math.floor(Math.random() * this.canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + this.size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  }

  private drawCircle(circle: any, update = false) {
    if (this.context) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      this.context.translate(translateX, translateY);
      this.context.beginPath();
      this.context.arc(x, y, size, 0, 2 * Math.PI);
      this.context.fillStyle = `rgba(${this.hexToRgb(this.color).join(', ')}, ${alpha})`;
      this.context.fill();
      this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      if (!update) {
        this.circles.push(circle);
      }
    }
  }

  private clearContext() {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    }
  }

  private drawParticles() {
    this.clearContext();
    for (let i = 0; i < this.quantity; i++) {
      const circle = this.circleParams();
      this.drawCircle(circle);
    }
  }

  private remapValue(value: number, start1: number, end1: number, start2: number, end2: number): number {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  private animate() {
    this.clearContext();
    this.circles.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        this.canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        this.canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(this.remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx + this.vx;
      circle.y += circle.dy + this.vy;
      circle.translateX += (this.mouse.x / (this.staticity / circle.magnetism) - circle.translateX) / this.ease;
      circle.translateY += (this.mouse.y / (this.staticity / circle.magnetism) - circle.translateY) / this.ease;

      this.drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > this.canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > this.canvasSize.h + circle.size
      ) {
        this.circles.splice(i, 1);
        const newCircle = this.circleParams();
        this.drawCircle(newCircle);
      }
    });
    this.rafID = window.requestAnimationFrame(() => this.animate());
  }

  private hexToRgb(hex: string): number[] {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    const hexInt = parseInt(hex, 16);
    const red = (hexInt >> 16) & 255;
    const green = (hexInt >> 8) & 255;
    const blue = hexInt & 255;
    return [red, green, blue];
  }
}
