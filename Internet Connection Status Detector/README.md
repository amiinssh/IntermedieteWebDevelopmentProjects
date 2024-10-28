Table of Contents

    Overview
    Features
    Folder Structure
    Installation
    Usage
    Code Details
    Contributions
    License

Overview

The Internet Connection Status Checker app regularly pings a known online resource and determines the user's connection status based on the success or failure of that request. If a connection is detected, it displays an "Online" message with a green background; if there is no connection, an "Offline" message with a red background is shown.
Features

    Real-Time Monitoring: Automatically checks the internet connection every 5 seconds.
    Dynamic Display: Updates the status message, background color, and icon based on the connection state.
    User Feedback: Provides clear visual and text-based cues for the online/offline state.

Folder Structure

    index.html: Contains the HTML structure.
    style.css: Contains the CSS styles for styling the app’s appearance.
    script.js: Contains the JavaScript logic for connection checking and status updates.
    /images:
        online.png: Icon for the "online" state.
        offline.png: Icon for the "offline" state.

Installation

To use this project:

    Clone this repository.
    Open index.html in a web browser to run the app.

Ensure that your /images folder contains online.png and offline.png files to indicate the online/offline states visually.
Usage

Simply open the index.html file in a browser to start the app. The page will:

    Check Connection on Load: The app will display your internet connection status as soon as the page loads.
    Continuous Monitoring: Every 5 seconds, the app rechecks the connection and updates the display accordingly.

Code Details
JavaScript Functionality

The primary logic is contained in script.js:
1. Variables and DOM Elements

javascript

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

    image: Updates with an "online" or "offline" icon depending on the connection status.
    statusDisplay: Updates with the text "You are ONLINE" or "OOPS!!! Your internet connection is down."
    bgColor: Used for applying online/offline background colors dynamically.

2. connectionStatus Function

This async function checks internet status by sending a fetch request to a static image URL. It appends the current timestamp as a query parameter to prevent caching, ensuring each request is treated as new by the browser.

javascript

async function connectionStatus() {
  try {
    const fetchResult = await fetch("https://upload.wikimedia.org/....png?time=" + new Date().getTime());
    image.src = "/images/online.png";
    statusDisplay.classList.add("connected");
    statusDisplay.classList.remove("disconnected");
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    statusDisplay.textContent = "OOPS!!! Your internet connection is down";
    image.src = "/images/offline.png";
    statusDisplay.classList.add("disconnected");
    statusDisplay.classList.remove("connected");
    bgColor.classList.remove("online");
    return false;
  }
}

    Success: Displays "You are ONLINE" with a green background.
    Error (Offline): Catches any error, displays "OOPS!!! Your internet connection is down" with a red background.

3. Monitoring Connection

    setInterval: Runs connectionStatus every 5 seconds.
    window.addEventListener("load", ...): Checks connection status immediately upon page load.

javascript

setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You are ONLINE";
  }
}, 5000);

window.addEventListener("load", async () => {
  const result = await connectionStatus();
  statusDisplay.textContent = result ? "You are ONLINE" : "You are OFFLINE";
});

CSS Classes for Visual Status

To visually indicate the online or offline status, the CSS classes .connected and .disconnected are dynamically toggled on the statusDisplay element:

css

.status.connected {
    background-color: #4caf50; /* Green for online */
    color: #fff;
}

.status.disconnected {
    background-color: #f44336; /* Red for offline */
    color: #fff;
}

Contributions

Contributions are welcome! If you'd like to improve this app or add features, feel free to submit a pull request.
License

This project is open-source and available under the MIT License.