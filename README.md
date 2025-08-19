# MediCare – Online Pharmacy React App

A modern, responsive online pharmacy web application built with **React**, **Vite**, and **Tailwind CSS**.  
Deployed on [Vercel](https://vercel.com/).

---

## Features

- ⚡ **Fast & Modern**: Built with Vite for instant reloads and fast builds.
- 🎨 **Beautiful UI**: Styled with Tailwind CSS and Lucide icons.
- 🛒 **Product Catalog**: Browse featured products and add to cart.
- 🏆 **About & Testimonials**: Learn about MediCare and read customer reviews.
- 📬 **Newsletter**: Subscribe for updates.
- 📞 **Contact Section**: Easy ways to get in touch.
- 📱 **Responsive**: Works great on all devices.
- 🛠️ **Smooth Section Navigation**: Scrolls to sections without changing the URL.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/new-med.git
cd new-med
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Deployment

This project is ready for deployment on **Vercel**.

### Vercel Settings

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

A `vercel.json` file is included for SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## Project Structure

```
src/
  Pages/
    Home.jsx
  assets/
    products.js
    pharmacy_team.png
  App.jsx
  main.jsx
index.html
tailwind.config.js
vercel.json
package.json
```

---

## Customization

- **Logo:** Update the favicon in `index.html`.
- **Products:** Edit `src/assets/products.js` to change product listings.
- **Images:** Place your images in `src/assets/`.

---

## License

This project is licensed under the MIT License.

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) (for demo images)
