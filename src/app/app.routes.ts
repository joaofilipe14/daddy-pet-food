import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';
import { ProductListComponent } from './features/components/product-list/product-list.component';
import { ProductDetailComponent } from './features/components/product-detail/product-detail.component';
import { CheckoutComponent } from './features/components/checkout/checkout.component';
import { ShopSuccessComponent } from './features/components/shop-success/shop-success.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: ProductListComponent },
            { path: 'produto/:id', component: ProductDetailComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: 'sucesso', component: ShopSuccessComponent },
            { path: 'sobre', component: AboutComponent },
            { path: 'contactos', component: ContactComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
