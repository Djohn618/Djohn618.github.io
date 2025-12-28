# Deshan John Portfolio Website

Professional portfolio website for Deshan John - Informatiker Applikationsentwickler & Webdesigner.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatic theme switching with user preference persistence
- **SEO Optimized** - Complete meta tags, structured data, and sitemap
- **Interactive Timeline** - Horizontal scrollable journey section with parallax effects
- **Contact Form** - Integrated with Formspree for email notifications
- **Modern Animations** - Smooth transitions and engaging user interactions
- **Accessibility** - ARIA labels, keyboard navigation, and proper contrast ratios
- **PWA Ready** - Web manifest for progressive web app support

## 📁 Project Structure

```
├── index.html              # Main homepage
├── 404.html               # Custom 404 error page
├── thankyou.html          # Form submission thank you page
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── logo.svg               # Website logo
├── favicon.svg            # SVG favicon
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── site.webmanifest       # PWA manifest
├── Images/                # Profile and general images
└── design_referenz_bilder/ # Reference images for timeline and projects
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6** - Icon library
- **Google Fonts** - Inter & Playfair Display typography
- **Formspree** - Contact form backend

## 📝 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Djohn618/Djohn618.github.io.git
cd Djohn618.github.io
```

### 2. Local Development

Simply open `index.html` in your web browser. For a better development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### 3. Deployment (GitHub Pages)

The site is automatically deployed via GitHub Pages. Any push to the main branch will trigger a deployment.

**Custom Domain Setup:**
1. Update the `CNAME` file with your domain
2. Configure DNS settings with your domain provider:
   - Add an A record pointing to GitHub's IP addresses
   - Or add a CNAME record pointing to `yourusername.github.io`

## 🔍 SEO Checklist

### ✅ On-Site SEO (Completed)

- [x] Comprehensive meta tags (title, description, keywords)
- [x] Open Graph tags for social media
- [x] Twitter Card meta tags
- [x] JSON-LD structured data for Person/Professional
- [x] Semantic HTML with proper heading hierarchy (H1, H2, H3)
- [x] Image alt text and lazy loading
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Mobile-responsive design
- [x] Fast page load times
- [x] Favicon and app icons

### 📋 External SEO Setup (Action Required)

1. **Google Search Console**
   - Submit your sitemap: `https://deshanjohn.me/sitemap.xml`
   - Verify domain ownership
   - Monitor indexing status

2. **Google Analytics** (Optional)
   - Create a GA4 property
   - Add tracking code to the website
   - Set up conversion goals

3. **Bing Webmaster Tools**
   - Submit sitemap
   - Verify ownership

4. **Social Media**
   - Share the website URL on LinkedIn, Instagram, etc.
   - Use consistent branding (name: Deshan John)

5. **Backlinks**
   - Add portfolio link to your profiles (LinkedIn, GitHub, etc.)
   - Consider guest posting or directory submissions

## 📧 Contact Form Configuration

The contact form is integrated with **Formspree** and sends emails to: `deshan.john@gmx.ch`

**Formspree Endpoint:** `https://formspree.io/f/mgoeznlr`

After successful submission, users are redirected to `/thankyou.html`

### Testing the Form

1. Fill out the contact form on the website
2. Submit the form
3. Check your email inbox at `deshan.john@gmx.ch`
4. Verify you receive the form submission
5. Confirm the redirect to the thank you page works

## 🎨 Customization

### Colors

The color palette is defined in CSS variables in `style.css`:

```css
:root {
    --color-dark-1: #2C3333;
    --color-dark-2: #395B64;
    --color-light-1: #A5C9CA;
    --color-light-2: #E7F6F2;
    --color-accent-3: #50B6FE;
}
```

### Content Updates

- **Timeline:** Update in `index.html` under `#journey` section
- **Projects:** Update in `index.html` under `#work` section
- **Skills:** Update in `index.html` under `#skills` section
- **About Text:** Update in `index.html` under `#about` section

### Adding New Images

1. Place images in the `Images/` or `design_referenz_bilder/` folder
2. Update the image paths in `index.html`
3. Add proper alt text for accessibility

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues & Solutions

### Dark Mode Toggle Not Visible on Mobile
**Fixed:** The dark mode toggle now remains visible on all screen sizes.

### Category Buttons Low Contrast in Dark Mode
**Fixed:** Improved color contrast for better visibility.

### Plus Icon Not Visible in Services Section
**Fixed:** Added proper color contrast for the service toggle icons.

## 📱 Responsive Breakpoints

- **Desktop:** > 968px
- **Tablet:** 768px - 968px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🔒 Security

- No sensitive data stored in the codebase
- Form submissions handled securely via Formspree
- HTTPS enforced on GitHub Pages

## 📄 License

© 2024 Deshan John. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For bug reports or suggestions, please open an issue.

## 📞 Support

For any questions or issues:
- **Email:** deshan.john@gmx.ch
- **LinkedIn:** [linkedin.com/in/deshan-john](https://www.linkedin.com/in/deshan-john/)
- **GitHub:** [@Djohn618](https://github.com/Djohn618)

---

**Last Updated:** December 2024
