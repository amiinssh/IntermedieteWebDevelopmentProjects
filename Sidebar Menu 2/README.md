# Sidebar UI Component

## Overview
This project implements a responsive and interactive sidebar navigation component designed with modern CSS and JavaScript. The sidebar can toggle between collapsed and expanded states, adapts seamlessly to different screen sizes, and supports a user-friendly experience with tooltips and smooth transitions.

---

## Features
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Collapsible Sidebar:** Toggle between expanded and compact views.
- **Dynamic Menu Toggle:** Expand or collapse the menu for better accessibility on smaller screens.
- **Customizable Styles:** Easily modify colors, fonts, and layout.
- **Smooth Transitions:** CSS animations enhance user interactions.
- **Tooltip Support:** Tooltips display labels in collapsed mode.

---

## Technologies Used
- **HTML**
- **CSS**: Modern styling with gradients, transitions, and responsive design.
- **JavaScript**: Handles sidebar toggling and resizing behavior.

---

## Installation and Usage
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Open the `index.html` file in your browser to preview the sidebar component.

---

## CSS Breakdown
- **Global Styles:**
  - Set a gradient background and ensure elements are styled with consistent margins, padding, and fonts.

- **Sidebar Styles:**
  - Includes `collapsed` and `expanded` states.
  - Features smooth width adjustments and dynamic height for responsive layouts.
  
- **Navigation Links:**
  - Hover effects for better interactivity.
  - Tooltips appear when the sidebar is collapsed.

- **Responsive Design:**
  - Adjustments for screen sizes below 1024px.
  - Compact menu display with scrollable content on smaller devices.

---

## JavaScript Functionality
- **Sidebar Toggler:** Handles collapsing and expanding the sidebar.
- **Menu Toggler:** Enables a dynamic dropdown menu for mobile-friendly navigation.
- **Resize Listener:** Adapts the sidebar's behavior when resizing the browser window.

---

## How to Customize
- **Colors and Fonts:**
  - Modify the `background` and `color` properties in the CSS file.
- **Dimensions:**
  - Adjust the `width`, `height`, and padding values to fit your design needs.
- **Tooltips:**
  - Customize tooltip styles in `.nav-tooltip` class.

---

