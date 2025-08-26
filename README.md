## OpticoreAI Single Page Website

A modern, responsive single-page site for OpticoreAI (Oman-based IT company) built with HTML, CSS, and Bootstrap 5. Includes smooth scrolling, active-link highlighting, accessible animations, and a Partners carousel.

## Getting Started

1. Clone or download this repository.
2. Open `home.html` directly in your browser, or run a simple static server:
   - Node.js: `npx serve .` then open the shown URL
   - Python 3: `python -m http.server 5500` then open `http://localhost:5500/home.html`

All assets (CSS, JS, images, videos) are served from the `statics` folder.

## Project Structure

```
OpticorAI_single_Web_Page/
├─ home.html
├─ statics/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ home.js
│  └─ media/
│     ├─ images/
│     │  └─ ... (logo.jpg, lynex pic.png, partner images)
│     └─ videos/
│        └─ ... (hero background, etc.)
└─ README.md
```

## Customization

- Content: edit sections in `home.html` (Hero, Overview, Challenges, Approach, Solution [LYNEX by OpticoreAI], Partners, Features & Benefits, Footer).
- Styles/Branding: update tokens and components in `statics/css/style.css`.
  - Colors, radius, shadows are defined as CSS variables in `:root`.
- Interactions: tweak behavior in `statics/js/home.js` (smooth scroll, active nav, animations, navbar effects).
- Media:
  - Images: `statics/media/images/`
  - Videos: `statics/media/videos/`

### Animations
- Add `data-anim` to any element to animate on first scroll into view:
  - `fade-up`, `fade-in`, `zoom-in`, `slide-left`, `slide-right`
- Example: `<h2 data-anim="fade-up">Section Title</h2>`
- Users with “reduce motion” preference will see animations disabled automatically.

### Partners Carousel
- Replace placeholder logos in the `#partners` section with your partner images (recommended transparent PNG/SVG):
  - Update the `<img src>` paths under the carousel items to your files in `statics/media/images/`.
  - Images are lazy-loaded and sized responsively with a subtle grayscale hover effect.
- Auto-advance is set to 3000ms and pauses on hover. Adjust via `data-bs-interval` and `data-bs-pause` on `#partnersCarousel`.

## Dependencies

- [Bootstrap 5](https://getbootstrap.com/) (CDN)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (CDN)
- [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts CDN)

## Deployment

You can deploy on any static hosting (GitHub Pages, Netlify, Vercel, S3, etc.). Upload the root folder preserving the `statics` directory structure.

## License

This project is for demonstration and internal use. Please contact OpticoreAI.com for commercial or production use.

---

**Contact**  
Tel: +968 9888 8892  
Address: Sultanate of Oman  
Website: [OpticoreAI.com](https://opticoreai.com)
