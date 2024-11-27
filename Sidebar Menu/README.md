# Sidebar with Dark Mode

This is a simple, customizable sidebar navigation with a dark mode toggle, built using HTML, CSS, and JavaScript. The sidebar features an interactive design that allows for easy navigation through menu items like "Dashboard," "Revenue," "Notifications," and more. Additionally, users can switch between light and dark themes for the sidebar and the entire page content.

---

## Features

- **Sidebar Navigation**: A vertical sidebar with menu links for various sections like Dashboard, Revenue, Analytics, and more.
- **Dark Mode Toggle**: A button to switch between light and dark themes for the sidebar and the entire page.
- **Responsive Layout**: The sidebar can be toggled open or closed using a button for a cleaner and more compact layout.

---

## File Structure

```
/your-project-folder
│
├── index.html           # Main HTML file containing structure of the sidebar and page content
├── style.css            # Custom CSS for styling the sidebar, menu items, dark mode, etc.
├── script.js            # JavaScript file to toggle the sidebar and dark mode
└── README.md            # Project README file
```

---

## Installation

To use this sidebar component in your project, follow these steps:

1. **Clone or Download the Repository**:

   - Clone this repository using Git or download the ZIP file.

   ```bash
   git clone <repository-url>
   ```

2. **Set up the files**:
   - Ensure that the HTML, CSS, and JavaScript files are correctly placed in your project directory.
   - The `index.html` file should be linked to the `style.css` for styling, and the `script.js` for interactivity.

---

## How It Works

1. **HTML Structure**:

   - The sidebar is placed inside a `nav` tag with the class `sidebar`.
   - It contains a header with a logo and text, followed by a menu of links (`<ul>` and `<li>` elements).
   - The sidebar includes icons for each menu item, and each item contains a `span` for the label text.
   - The sidebar also includes a dark mode toggle feature located at the bottom.

2. **CSS Styling**:

   - The sidebar is styled to be fixed on the left side of the screen with a width of 250px.
   - A `.close` class is used to shrink the sidebar width to 88px when toggled.
   - Colors and other styles are controlled using CSS variables, allowing for easy customization.

3. **JavaScript Functionality**:
   - **Sidebar Toggle**: When the user clicks the toggle button (`.bx-chevron-right`), the `close` class is added/removed from the sidebar to toggle its width.
   - **Dark Mode Toggle**: When the user clicks the dark mode toggle (`.toggle-switch`), the `dark` class is toggled on the body, which changes the page's background and sidebar colors.
   - The dark mode toggle also changes the text from "Dark Mode" to "Light Mode" depending on the current theme.

---

## How to Use

1. **To Open/Close the Sidebar**:

   - Click on the hamburger icon (or toggle button) located at the top of the sidebar to toggle between a closed and open state.

2. **To Toggle Dark Mode**:
   - Click on the moon icon to switch to dark mode. When dark mode is enabled, the page background and sidebar will change to darker colors.
   - The text on the toggle button will change to "Light Mode" when in dark mode, allowing you to switch back to the default light theme.

---

## Customization

- **Menu Items**: To add or modify menu items, you can edit the `<ul class="menu-links">` section in the HTML. Each `<li>` tag represents a menu item with an icon and text.
- **Dark Mode Colors**: Customize the dark mode theme by changing the CSS variables in the `style.css` file under the `.dark` selector.
- **Icons**: You can change the icons used for the menu items by replacing the `bx` icon classes. You can find more icons on the [Boxicons website](https://boxicons.com/).

---

## Technologies Used

- **HTML**: Structure of the sidebar and page content.
- **CSS**: Custom styles for the sidebar, including the dark mode theme.
- **JavaScript**: Adds interactivity for toggling the sidebar and dark mode.
- **Boxicons**: A free icon library used for the sidebar menu icons.

---
