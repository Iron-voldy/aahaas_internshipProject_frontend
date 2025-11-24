# Aahaas Ecommerce - React Frontend

This is the frontend application for the Aahaas Ecommerce platform, built with React, Vite, and Tailwind CSS.

## Features

- Modern, responsive UI with dark blue theme
- Product listing with grid layout
- Smooth animations using AOS (Animate On Scroll)
- Card hover animations
- Loading states with spinner
- Cart functionality with counter
- Responsive design for desktop and mobile
- Header with navigation and search
- Banner section with call-to-action
- Footer with social media links

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Iron-voldy/aahaas_internship_task.git
cd aahaas_internship_project/product-frontend-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API URL

The frontend is configured to connect to the Laravel API at `http://localhost:8000/api/products`.

If your backend runs on a different port, update the API URL in `src/components/Products.jsx`:

```javascript
const response = await axios.get('http://localhost:8000/api/products');
```

Change `8000` to your backend port if needed.

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
product-frontend-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with search and cart
│   │   ├── Banner.jsx          # Hero banner section
│   │   ├── Products.jsx        # Products listing with API integration
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── Loading.jsx         # Loading spinner component
│   │   └── Footer.jsx          # Footer with social links
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind directives
├── public/
├── package.json
└── tailwind.config.js          # Tailwind CSS configuration
```

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **AOS**: Animate On Scroll library

## Features in Detail

### Dark Blue Theme

The application uses a custom dark blue color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'dark-blue': {
    50: '#e6f0ff',
    // ... more shades
    950: '#000a1a',
  }
}
```

### Animations

- **Card Hover**: Product cards lift up and glow on hover
- **Fade In**: Elements fade in when scrolling
- **Button Animations**: Buttons scale up on hover
- **AOS**: Scroll-triggered animations for product cards

### Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## API Integration

The frontend fetches products from the Laravel backend API:

**Endpoint**: `GET http://localhost:8000/api/products`

**Expected Response**:
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product description",
    "price": "99.99",
    "image_url": "https://example.com/image.jpg"
  }
]
```

## Components

### Header
- Logo and branding
- Navigation menu (Home, Products, Contact)
- Search bar
- Shopping cart icon with count badge
- Mobile responsive menu

### Banner
- Hero section with tagline
- Call-to-action button
- Statistics display
- Smooth scroll to products

### Products
- Fetches products from API
- Loading state with spinner
- Error handling with retry button
- Grid layout (1-4 columns based on screen size)

### ProductCard
- Product image with zoom effect
- Product name and description
- Price display
- "Add to Cart" button
- Hover animations

### Footer
- Brand information
- Quick links
- Contact information
- Social media icons
- Copyright notice

## Troubleshooting

### API Connection Failed

If you see "Failed to fetch products" error:
1. Make sure the Laravel backend is running on `http://localhost:8000`
2. Check if the API endpoint returns data: `curl http://localhost:8000/api/products`
3. Verify CORS is enabled in the backend

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

## Development

### Adding New Components

1. Create a new file in `src/components/`
2. Import and use it in `App.jsx` or other components

### Customizing Theme

Edit `tailwind.config.js` to customize colors, fonts, and other theme settings.

### Modifying Animations

Edit `src/index.css` to add or modify animations.

## License

This project is open-source and available for educational purposes.
