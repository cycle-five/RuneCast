# RuneCast

**SpellCast Reborn, Reimagined, Unrivaled**

RuneCast is an immersive word game Discord Activity with a cyberpunk aesthetic. In active development with countless new features planned including leaderboards, competitions, achievements, and more!

## Landing Page

This repository contains the official RuneCast landing page - a single-page site showcasing the game with a cyberpunk theme.

### Features

- 🎨 **Cyberpunk Theme**: Dark backgrounds with neon cyan and magenta accents
- ✨ **Visual Effects**: Glowing text, scanlines, grid overlays, and smooth animations
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- ⚡ **Lightweight**: Pure HTML, CSS, and JavaScript - no frameworks required
- 🎯 **Interactive Elements**: Hover effects, smooth scrolling, and dynamic animations

### Tech Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern features including Grid, Flexbox, animations, and custom properties
- **Vanilla JavaScript**: No dependencies, pure DOM manipulation

### Running Locally

Simply open `index.html` in any modern web browser:

```bash
# Using Python's built-in server
python3 -m http.server 8000

# Or using Node.js http-server (if installed)
npx http-server

# Or just open the file directly
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Then navigate to `http://localhost:8000` in your browser.

### Project Structure

```
RuneCast/
├── index.html     # Main HTML structure
├── styles.css     # Cyberpunk styling and animations
├── script.js      # Interactive functionality
└── README.md      # This file
```

### Sections

1. **Hero**: Eye-catching title with glitch effect and glowing text
2. **About**: Game description and key features (leaderboards, achievements, competitions)
3. **Media**: Placeholder grid for screenshots and gameplay videos
4. **Links**: Call-to-action buttons for Discord integration
5. **Footer**: Copyright and attribution

### Customization

To customize the landing page:

- **Colors**: Edit CSS custom properties in `:root` selector in `styles.css`
- **Content**: Update text in `index.html`
- **Effects**: Adjust animations and transitions in `styles.css`
- **Interactivity**: Modify behavior in `script.js`

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### License

© 2024 RuneCast. All rights reserved.
