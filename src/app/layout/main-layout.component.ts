import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../core/services/cart.service';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
    cart = inject(CartService);
    isMobileMenuOpen = signal(false);

    toggleMobileMenu() {
        this.isMobileMenuOpen.update(v => !v);
    }

    closeMobileMenu() {
        this.isMobileMenuOpen.set(false);
    }
}
