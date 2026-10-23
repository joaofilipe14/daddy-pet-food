import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private http = inject(HttpClient);
    private jsonUrl = 'data/products.json';

    getActiveProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.jsonUrl).pipe(
            map(products => products.filter(p => p.active))
        );
    }

    getProductById(id: string): Observable<Product | undefined> {
        return this.http.get<Product[]>(this.jsonUrl).pipe(
            map(products => products.find(p => p.id === id))
        );
    }
}
