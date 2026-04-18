# 💍 Wedding Invitation — Duy Quý & Sương Sương

A React wedding invitation app built with Vite + CSS Modules.

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Cover/          # Full-screen opening page with bg image
│   ├── Couple/         # Groom & bride photos + info
│   ├── SaveTheDate/    # Date, countdown timer
│   ├── Venue/          # Map + address
│   ├── Gallery/        # Photo grid with lightbox carousel
│   ├── Rsvp/           # RSVP form
│   ├── Thanks/         # Thank you section
│   ├── Lightbox/       # Reusable image carousel modal
│   └── ui/
│       └── SectionHeader/  # Reusable eyebrow + title
├── hooks/
│   ├── useCountdown.js     # Live countdown to wedding date
│   └── useScrollReveal.js  # IntersectionObserver scroll animations
├── constants/
│   └── weddingData.js      # ⭐ All wedding content in one place
├── styles/
│   └── globals.css         # CSS vars, reset, shared styles
├── App.jsx                 # Root — cover state, layout
└── main.jsx                # Entry point
```

## Customization

All content is centralized in **`src/constants/weddingData.js`**:
- Names, parents, hometowns
- Wedding date & time
- Venue details & map URL
- Photo URLs (groom, bride, gallery)
- Cover background image & text

## Tech Stack
- React 18
- Vite 5
- CSS Modules (scoped per component)
- No external UI libraries
