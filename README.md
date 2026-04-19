# Sneaker Store

A responsive single-page frontend mockup for a fictional premium sneaker marketplace, built with React, Tailwind CSS, React Router DOM, and Lucide React.

## Overview

Sneaker Store is a dark-mode e-commerce UI concept with a gaming-inspired aesthetic. It includes shopper and seller flows, a responsive layout for mobile to desktop, and a clean component-driven architecture using React Context for app state.

## Features

- Responsive dark-mode storefront UI
- Login flow with dummy authentication
- Global state management using React Context
- Hardcoded sneaker inventory with multiple products
- Product listing grid with category tags
- Product details page with size selection
- Add to Cart success toast
- Seller dashboard for viewing inventory
- Add product form that updates the global store
- Mobile-friendly sidebar and seller shortcuts
- Smooth scrolling and custom scrollbar styling

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## Project Structure

```bash
src/
├── components/
│   ├── ProductCard.jsx
│   ├── Sidebar.jsx
│   └── TopNavbar.jsx
├── pages/
│   ├── AddProductForm.jsx
│   ├── LoginPage.jsx
│   ├── ProductDetails.jsx
│   ├── SellerDashboard.jsx
│   └── Storefront.jsx
├── App.jsx
├── App.css
├── StoreContext.jsx
├── index.css
└── main.jsx
```

## Routes

- `/login`  
  Login page with dummy authentication

- `/`  
  Main storefront view with hero section, filters, and product grid

- `/product/:id`  
  Product details page with size selection and add-to-cart action

- `/seller`  
  Seller dashboard showing current inventory

- `/seller/add`  
  Add product form for inserting a new sneaker into context state

## State Management

The app uses `StoreContext` to manage:

- `user`
- `inventory`
- `login()`
- `logout()`
- `addProduct()`

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Design Notes

- Deep dark backgrounds
- Purple accent color for highlights and actions
- White primary text and muted gray secondary text
- Tailwind-only styling without external UI libraries
- Responsive layout for phone, tablet, laptop, and desktop screens

## Demo Credentials

Use any email and password to log in.

Example:

```txt
Email: demo@sneakerstore.com
Password: 123456
```

## Future Improvements

- Real search and filtering
- Shopping cart state
- Persistent auth and inventory storage
- Product sorting functionality
- Seller product editing and deletion
- Image upload support

## License

This project is for learning, portfolio, and mockup/demo purposes.
