import { Component, OnInit, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';

declare var AOS: any;
declare var feather: any;

interface Review {
    authorName: string;
    content: string;
    rating: number;
}

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent, RouterLink],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
    private productService = inject(ProductService);

    // 1. Inicializa products como um Signal vazio
    products = signal<Product[]>([]);

    reviews = signal<Review[]>([
        { authorName: "Maria S.", content: "O pelo do meu cão ficou brilhante e muito mais macio em apenas duas semanas!", rating: 5 },
        { authorName: "João P.", content: "Excelente suplemento para a mobilidade. O Max voltou a correr sem dores.", rating: 5 },
        { authorName: "Ana C.", content: "A entrega foi super rápida e o preço é imbatível pela qualidade.", rating: 4 },
        { authorName: "Rui M.", content: "Fish Oil de ótima qualidade, noto a diferença na energia da minha cadela.", rating: 5 }
    ]);

    ngOnInit() {
        // 2. Subscreve ao ficheiro JSON e guarda os dados no Signal
        this.productService.getActiveProducts().subscribe({
            next: (data) => this.products.set(data),
            error: (err) => console.error('Erro ao carregar produtos', err)
        });

        this.reviews.set([...this.reviews(), ...this.reviews()]);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.init({ duration: 800, once: true });
            }
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 100);
    }
}
