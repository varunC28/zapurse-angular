import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/legal/terms/terms.component';
import { PrivacyComponent } from './pages/legal/privacy/privacy.component';
import { RefundComponent } from './pages/legal/refund/refund.component';
import { FaqComponent } from './pages/legal/faq/faq.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'legal/terms', component: TermsComponent },
    { path: 'legal/privacy', component: PrivacyComponent },
    { path: 'legal/refund', component: RefundComponent },
    { path: 'legal/faq', component: FaqComponent },
    { path: '**', redirectTo: '' }
];
