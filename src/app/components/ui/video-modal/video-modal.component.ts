import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
    selector: 'app-video-modal',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './video-modal.component.html',
    styleUrl: './video-modal.component.css'
})
export class VideoModalComponent {
    @Input() videoSrc: string = '';
    @Input() isOpen: boolean = false;
    @Output() close = new EventEmitter<void>();

    readonly X = X;

    onClose() {
        this.close.emit();
    }
}
