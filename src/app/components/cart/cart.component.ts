import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  removeFromCart(productId: number): void {
    const itemToRemove = this.cartItems.find(item => item.product.id === productId);
    if (itemToRemove) {
      this.cartService.removeFromCart(productId);
      this.toastr.info(`${itemToRemove.product.title} removed from cart`, 'Item Removed', {
        timeOut: 2000,
        positionClass: 'toast-top-right'
      });
      this.loadCart();
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      this.cartService.updateQuantity(productId, quantity);
      this.toastr.success(`Updated quantity of ${item.product.title}`, 'Quantity Updated', {
        timeOut: 2000,
        positionClass: 'toast-top-right'
      });
      this.loadCart();
    }
  }
} 