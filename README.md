# E-commerce Product Listing App

## What I Built
- A product listing page showing different items
- A shopping cart to add and manage products
- Toast notifications for user actions

## How I Built It
I used:
- Angular 16
- Bootstrap 5 for styling
- Font Awesome for icons
- ngx-toastr for notifications

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── product-list/     # Shows all products
│   │   └── cart/            # Shopping cart page
│   ├── models/              # Data structures
│   ├── services/            # Business logic
│   └── app.module.ts        # Main module
```

## Features
1. Product List
   - View products in a grid
   - See product details
   - Add to cart with success notification
   - Pagination (5 items per page)

2. Shopping Cart
   - Add/remove items with notifications
   - Change quantities with success messages
   - See total price

## Dependencies
- @angular/* (v16.2.0)
- bootstrap (v5.3.2)
- @fortawesome/fontawesome-free (v6.4.2)
- ngx-toastr (latest)
- @angular/animations

## How to Run
1. Clone the repo
2. Run `npm install`
3. Run `ng serve`
4. Open `http://localhost:4200`
