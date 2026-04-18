# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript website for **Eurohause s.r.o.**, a Slovak company specializing in wooden construction, MITEK trusses, and timber buildings. The website is built in Slovak language and serves as a company portfolio and contact platform.

## Architecture & Structure

### Core Pages
- `index.html` - Main landing page with hero section, services overview, gallery preview, and testimonials
- `sluzby.html` - Services page with detailed service descriptions and photo galleries
- `portfolio.html` - Project gallery with filtering and lightbox functionality
- `kontakt.html` - Contact page with contact form and business information

### Key Files
- `style.css` - Main stylesheet with comprehensive responsive design
- `script.js` - Main JavaScript file handling navigation, animations, and interactive features
- `footer.html` - Shared footer component (loaded dynamically via JavaScript)
- `logo.png` - Company logo
- `sources/` - Image directory with organized subdirectories for different content types

### JavaScript Architecture
The website uses vanilla JavaScript with a modular approach:

1. **DOM Ready Handler** - All functionality wrapped in `DOMContentLoaded` event
2. **Dynamic Footer Loading** - Footer HTML is injected via JavaScript from `script.js`
3. **Navigation System** - Mobile-responsive hamburger menu with smooth transitions
4. **Image Cycling** - Hero background images and testimonials rotate automatically
5. **Scroll Effects** - Progress indicator, navbar transparency changes, and scroll-based animations
6. **Interactive Components**:
   - Services carousel with navigation controls
   - Portfolio filtering system with smooth animations
   - Lightbox gallery viewer with navigation
   - Privacy policy popup

### CSS Architecture
The stylesheet follows a structured approach:
- CSS Reset and base styles
- Component-specific styling (navbar, hero, services, gallery, etc.)
- Responsive design with mobile-first approach
- Custom animations and transitions
- Utility classes for consistent spacing and typography

### Image Organization
```
sources/
├── Navrh/          # Design projects
├── Vyroba/         # Production photos
├── montaz_preprava/ # Assembly and transport
├── klampiar/       # Roofing and sheet metal work
├── drevostavby/    # Timber construction
├── drevosklad/     # Timber warehouse
└── new photo/      # Recent project photos
```

## Development Workflow

### No Build Process
This is a static website with no build tools or package managers. All files are served directly.

### Testing
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- Check responsive design on various screen sizes
- Verify all interactive features (navigation, carousel, lightbox, forms)
- Test Slovak language character encoding

### Image Optimization
- Images should be optimized for web before adding to `sources/` directory
- Use appropriate formats (JPG for photos, PNG for logos/graphics)
- Consider loading performance when adding new images

## Key Features

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Hamburger menu for mobile navigation
- Adaptive layouts for all components

### Multilingual Considerations
- All content is in Slovak language
- Uses proper Slovak language attributes (`lang="sk"`)
- Includes Slovak-specific characters and formatting

### SEO & Performance
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for business information
- Semantic HTML structure
- Lazy loading for images where appropriate

### Interactive Features
- Services carousel with navigation controls (`script.js:442-491`)
- Portfolio filtering system with smooth animations (`portfolio.html:846-991`)
- Lightbox image viewer with keyboard navigation
- Mobile-optimized back-to-top button
- Privacy policy popup with GDPR compliance text

## Common Development Tasks

### Adding New Images
1. Add optimized images to appropriate `sources/` subdirectory
2. Update relevant HTML files with new image references
3. Test lightbox functionality if images are part of galleries

### Modifying Services
1. Update service content in `sluzby.html`
2. Ensure service navigation links match section IDs
3. Update service carousel in `index.html` if needed
4. Add corresponding images to `sources/` directory

### Updating Contact Information
1. Modify business details in `script.js` (footer loading function)
2. Update structured data in all HTML files
3. Check contact form functionality

### Styling Changes
1. Modify `style.css` following existing patterns
2. Test responsive design across breakpoints
3. Verify cross-browser compatibility

## Technical Notes

### JavaScript Patterns
- Uses modern JavaScript (ES6+ features like arrow functions, const/let)
- Event delegation for dynamic content
- Intersection Observer API for scroll animations
- requestAnimationFrame for smooth animations

### CSS Patterns
- Custom properties could be added for better maintainability
- Uses flexbox and CSS Grid for layouts
- Consistent naming conventions with BEM-like methodology
- Extensive use of CSS transitions for smooth interactions

### Browser Support
- Modern browsers (ES6+ support required)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No Internet Explorer support needed

## Maintenance

### Regular Updates
- Update copyright year in footer
- Refresh project photos in gallery
- Update business information if changed
- Monitor and update contact forms

### Performance Monitoring
- Check image loading times
- Monitor mobile performance
- Test form submission functionality
- Verify all interactive features work correctly