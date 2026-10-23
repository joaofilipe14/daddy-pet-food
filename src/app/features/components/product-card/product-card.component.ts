import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  public cartService = inject(CartService);
  @Input() product!: Product; // Recebe os dados do pai (Lista)

  addToCart(event: Event) {
    event.stopPropagation(); // Evita que abra o detalhe ao clicar no botão
    this.cartService.addItem(this.product);
  }
}
