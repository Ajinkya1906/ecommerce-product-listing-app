import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 99.99,
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Smart Watch',
      price: 149.99,
      description: 'Feature-rich smartwatch with health monitoring and GPS',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Laptop Pro',
      price: 199.99,
      description: 'High-performance laptop with 16GB RAM and 512GB SSD',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      title: 'Digital Camera',
      price: 249.99,
      description: 'Professional DSLR camera with 4K video recording',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      title: 'Gaming Console',
      price: 299.99,
      description: 'Next-gen gaming console with 4K gaming support',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      title: 'Smart Speaker',
      price: 349.99,
      description: 'Voice-controlled smart speaker with premium sound quality',
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 7,
      title: 'Drone Pro',
      price: 399.99,
      description: '4K aerial drone with 30-minute flight time and obstacle avoidance',
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 8,
      title: 'VR Headset',
      price: 449.99,
      description: 'Immersive virtual reality headset with motion tracking',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 9,
      title: 'Electric Scooter',
      price: 499.99,
      description: 'Foldable electric scooter with 25-mile range',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 10,
      title: 'Smart Home Hub',
      price: 549.99,
      description: 'Central control for all your smart home devices',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
} 