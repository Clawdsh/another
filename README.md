# A Random Website

My very first website, built as a way of getting back into coding. It's a personal portfolio page about me, made with plain HTML and CSS, and it marks the start of my web development journey.

## About

I'm Cloud Jharence Saulog, a 19-year-old Industrial Technology student (specializing in Electronics Technology) at Bulacan State University and an aspiring web developer. I'm teaching myself HTML, CSS, and JavaScript one step at a time, and this project is where I practice what I learn.

## Features

- **Sticky header** with a logo and navigation links that smooth-scroll to each section (Home, Random Stuff, Skill Set, Works, Contacts, Certifications)
- **Introduction** with a circular profile photo (swaps to a GIF on hover) and an "About Me" bio
- **Random Stuff** section with an audio player and a video player
- **Skill Set** section with three columns: Hobbies, Tech Stack, and Skills, shown as pill-style lists
- **My Works** section with a project card (screenshot, short description, languages used, and a "Visit" link to the GitHub repo)
- **Contacts** buttons for Facebook, Instagram, Email, and GitHub, each with a hover tooltip showing the handle or address
- **Certifications** card linking to my public Credly badge (Microsoft Office Specialist: Excel Associate)
- **Contact Me** form with name, email, and project idea fields
- **Custom styling**: rounded header and footer, box shadows, a custom font, custom text selection color, and a full-page fixed background image
- **Icons** from Font Awesome and Open Graph meta tags for link previews

## Built With

- **HTML5** for structure and content
- **CSS3** for styling (flexbox, grid, transitions, `position: sticky`, custom `@font-face`)
- **Neucha** font for section titles
- **Font Awesome** for icons

## Project Structure

```
.
├── index.html        # Main page
├── style.css         # All styling
├── fonts/
│   └── Neucha-Regular.ttf
└── Keeps/            # Images, audio, and video used by the site
    ├── Favicon.jpg
    ├── logo.png
    ├── Background.jpg
    ├── Clawdsh.jpg
    ├── profile-hover.gif
    ├── confused.gif
    ├── cardd.png
    ├── github.png
    ├── orcert.png
    └── (audio and video files)
```

## Getting Started

1. Clone or download this repository.
2. Make sure the `Keeps/` and `fonts/` folders sit next to the HTML file and `style.css`.
3. Open the HTML file in any web browser. No build step or installation is needed.

> **Note:** The contact form currently has no backend, so submitting it won't send anything yet.

## What I Learned

- Structuring a page with semantic elements (`header`, `nav`, `main`, `section`, `footer`)
- Linking sections with anchor links and IDs, plus smooth scrolling
- Embedding audio and video
- Laying things out with flexbox and grid
- Building a sticky navigation bar
- Creating hover effects, transitions, and CSS-only tooltips
- Building forms with labels, inputs, and validation attributes
- Styling with classes, IDs, borders, shadows, and custom fonts

## Roadmap

- [ ] Add JavaScript interactivity
- [ ] Connect the contact form to a working backend or form service
- [ ] Make the layout fully responsive on mobile
- [ ] Improve accessibility (alt text, contrast, keyboard navigation)
- [ ] Add more projects to the Works section as I build them

## Author

**Cloud Jharence Saulog**

- Facebook: [Cerzoo](https://www.facebook.com/Cerzoo/)
- Instagram: [@clawdsh](https://www.instagram.com/clawdsh)
- GitHub: [Clawdsh](https://github.com/Clawdsh)
- Email: jharencecloud@gmail.com

## License

&copy; 2026 Cloud Jharence Saulog. Made for learning and personal use.
