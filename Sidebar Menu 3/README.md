# Sidebar Navigation Project

## Overview

This project implements a responsive and dynamic sidebar navigation menu for web applications. It features collapsible submenus, a responsive design that adapts to various screen sizes, and modern styling. The design prioritizes usability and aesthetic appeal, making it a great starting point for integrating navigation into your projects.

---

## Features

- **Responsive Design:** 
  - Adapts seamlessly to different screen sizes.
  - Horizontal navigation for mobile devices.

- **Collapsible Sidebar:** 
  - Can be toggled between expanded and collapsed states.
  - Uses animations for a smooth transition.

- **Submenu Support:** 
  - Collapsible submenus for organized navigation.
  - Multi-level menu functionality.

- **Customizable Styling:** 
  - Easily adjustable variables for themes and colors using CSS custom properties.

- **Dynamic JavaScript Functionality:** 
  - Toggle states for sidebar and submenus.
  - Ensures all submenus close when toggling the main sidebar.

---

## Technologies Used

1. **HTML**: Structural layout of the navigation and main content area.
2. **CSS**: Styling and responsive design using CSS Grid, Flexbox, and custom properties.
3. **JavaScript**: Interactivity for toggling the sidebar and submenus.

---

## Files and Directory Structure

```
project/
│
├── index.html        # Main HTML file with navigation structure
├── style.css         # Stylesheet for layout and theme
├── script.js         # JavaScript for sidebar interactivity
└── README.md         # Documentation for the project
```

---

## Installation and Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/sidebar-navigation.git
   cd sidebar-navigation
   ```

2. **Open in a Browser**
   - Open `index.html` in any web browser.

---

## Customization

1. **Modify the Sidebar Items**
   - Update the `<ul>` in the HTML file to add, remove, or modify menu items.

2. **Adjust Styles**
   - Edit `style.css` to:
     - Change the colors by modifying CSS variables (`:root` section).
     - Customize dimensions and layout.

3. **JavaScript Behavior**
   - Modify `script.js` to add new interactions or functionality.

---

## Key Components

### HTML (Structure)
- **Sidebar Navigation (`#sidebar`)**:
  Contains menu items with submenus for expandable options.
  
- **Main Content (`<main>`)**:
  Placeholder for primary page content.

### CSS (Styling)
- **Custom Properties**:
  - `--base-clr`: Base background color.
  - `--text-clr`: Main text color.
  - `--accent-clr`: Active link and highlight color.
  
- **Responsive Layout**:
  - Uses media queries to switch to a mobile-friendly design.

### JavaScript (Interactivity)
- `toggleSidebar()`: Toggles the sidebar's visibility.
- `toggleSubMenu(button)`: Manages submenu toggle behavior.
- `closeAllSubMenus()`: Ensures only one submenu is expanded at a time.

---

## Responsive Behavior

- **Desktop**: 
  - Vertical navigation with collapsible sidebar.
  
- **Mobile**:
  - Horizontal navigation bar at the bottom.
  - Submenus display in an overlay above the bar.

---

## Demo

Include a link to a hosted version or screenshots of the project.

---

## Future Enhancements

- Add multi-level submenu support.
- Integrate accessibility features (ARIA attributes).
- Add animation for submenu expansion/collapse.

---

