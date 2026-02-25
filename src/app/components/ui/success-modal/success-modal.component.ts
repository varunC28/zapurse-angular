import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
    selector: 'app-success-modal',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './success-modal.component.html',
    styleUrl: './success-modal.component.css'
})
export class SuccessModalComponent {
    @Input() message: string = 'Form submitted successfully!';
    @Output() close = new EventEmitter<void>();

    readonly Check = Check;

    onClose() {
        this.close.emit();
    }
}
