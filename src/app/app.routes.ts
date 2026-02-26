import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/service-page/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'legal/terms',
        loadComponent: () => import('./pages/legal/terms/terms.component').then(m => m.TermsComponent)
    },
    {
        path: 'legal/privacy',
        loadComponent: () => import('./pages/legal/privacy/privacy.component').then(m => m.PrivacyComponent)
    },
    {
        path: 'legal/refund',
        loadComponent: () => import('./pages/legal/refund/refund.component').then(m => m.RefundComponent)
    },
    {
        path: 'legal/faq',
        loadComponent: () => import('./pages/legal/faq/faq.component').then(m => m.FaqComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./pages/blog-page/blog-page.component').then(m => m.BlogPageComponent)
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./pages/blog-detail-page/blog-detail-page.component').then(m => m.BlogDetailPageComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
