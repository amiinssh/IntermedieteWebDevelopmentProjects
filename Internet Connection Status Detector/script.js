const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );

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

// Monitor the connection
setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "You are ONLINE";
  }
}, 5000);

// Check connection when page loads
window.addEventListener("load", async () => {
  const result = await connectionStatus();
  statusDisplay.textContent = result ? "You are ONLINE" : "You are OFFLINE";
});
