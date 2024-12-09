# Sidebar Navigation Menu - README

## Overview
This project is a responsive **Sidebar Navigation Menu** built with HTML, CSS, and JavaScript. It features a collapsible sidebar with smooth transitions, tooltips, and user profile integration. The sidebar is designed to enhance the user experience for web applications or dashboards.

---

## Features
- **Responsive Design**: Adjusts seamlessly to various screen sizes.
- **Collapsible Sidebar**: Expand or collapse the sidebar with a toggle button.
- **Tooltips**: Displays tooltips when the sidebar is collapsed for improved usability.
- **Icons**: Uses Boxicons for stylish and consistent iconography.
- **Search Bar**: Integrated search bar for quick navigation.
- **Profile Section**: Includes user profile details and a logout button.
- **Smooth Animations**: Transition effects for sidebar interactions.

---

## Technologies Used
- **HTML5**: Markup for the structure of the sidebar and content.
- **CSS3**: Styling for the sidebar, tooltips, and animations.
- **JavaScript (ES6)**: Logic for toggle functionality and interaction handling.
- **Boxicons**: Icon library for sidebar menu items.

---

## File Structure
```
├── index.html       # Main HTML file
├── style.css        # Styling for the sidebar and home content
├── script.js        # JavaScript for sidebar toggle functionality
└── images/          # Folder for profile images or other assets
```

---


## Code Highlights

### HTML Structure
The sidebar is divided into sections:
- `logo-content`: Displays the logo and the sidebar toggle button.
- `nav-list`: Contains the navigation links with icons and tooltips.
- `profile-content`: Shows the user profile and logout button.

### CSS Features
- **Sidebar Transitions**:
   ```css
   .sidebar {
       transition: all 0.5s ease;
   }
   ```
- **Tooltips**:
   ```css
   .sidebar ul li .tooltip {
       transition: all 0.5s ease;
       opacity: 0;
   }
   ```

### JavaScript Functionality
Toggles the sidebar on button click:
```javascript
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function() {
    sidebar.classList.toggle('active');
};
```

---

## Dependencies
- **Boxicons**: Include via CDN:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet">
   ```

---

## Customization
1. **Colors**:
   - Modify sidebar background in `style.css`:
     ```css
     .sidebar {
         background: #11101d;
     }
     ```
   - Update hover colors for links:
     ```css
     .sidebar ul li a:hover {
         background: #fff;
         color: #11101d;
     }
     ```

2. **Animations**:
   Adjust transition speeds:
   ```css
   .sidebar {
       transition: all 0.3s ease;
   }
   ```

3. **Icons**:
   Change icons by replacing `bx` classes in `index.html`.

---



