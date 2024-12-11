# Responsive Dropdown Menu - README

## Overview

This project is a **responsive dropdown menu** built with HTML, CSS, and JavaScript. The design includes a fixed header with dropdown navigation, providing a sleek and modern user experience. The menu is mobile-friendly and adapts seamlessly to different screen sizes.

## Features

- **Fixed Header**: Ensures the navigation remains visible as users scroll.
- **Responsive Design**: Automatically adapts to screens of varying sizes.
- **Dropdown Menus**: Expandable submenus for better organization of navigation options.
- **Smooth Transitions**: Includes animations for dropdown toggles and hover effects.
- **Icon Integration**: Uses [Remix Icon](https://remixicon.com/) for visual enhancements.

---

## Project Structure

### File Breakdown
1. **HTML**: Defines the structure of the menu.
2. **CSS**: Handles styling, layout, and responsive behavior.
3. **JavaScript**: Adds interactivity for toggling the menu and dropdowns.

### Files
- `index.html`: Core structure of the menu.
- `style.css`: Stylesheet defining the visual aspects of the menu.
- `script.js`: JavaScript for handling dynamic menu interactions.

---


## Customization

### Modifying Colors
The project uses CSS variables defined in the `:root` selector for easy customization:
- `--black-color`: Base color for the menu background.
- `--white-color`: Text and icon color.
- `--body-color`: Background color of the page.

### Adding/Removing Menu Items
Modify the `<ul class="nav__list">` in `index.html` to include additional links or dropdowns.

---

## Features in Detail

### Mobile Responsiveness
- On smaller screens, the navigation menu is hidden by default and can be toggled with a burger icon.
- Dropdown menus expand and collapse with smooth animations.

### Desktop Experience
- All dropdowns are visible on hover.
- Submenus are aligned horizontally for a clean layout.

---

## Development

### Tools Used
- **HTML5** for markup.
- **CSS3** for styling and transitions.
- **Vanilla JavaScript** for interactivity.
- [Remix Icon](https://remixicon.com/) for icons.

### Responsive Breakpoints
- `@media` queries ensure optimal layouts for:
  - Mobile screens: `< 1118px`
  - Extra small screens: `< 340px`
  - Desktop screens: `>= 1118px`

---


