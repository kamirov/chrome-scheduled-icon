// Define the flag icons
const icons = {
  france: 'icons/france.png',
  spain: 'icons/spain.png',
  india: 'icons/india.png',
  default: 'icons/default.png',
};

// This function gets the correct icon based on the current time and day of the week
function getIcon() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  if (day === 1 || day === 3 || day === 5) { // Monday, Wednesday, Friday
    if (hour >= 13 && hour < 16) return icons.france;
    if (hour >= 16 && hour < 20) return icons.spain;
    if (hour >= 20 && hour < 22) return icons.india;
  } else if (day === 2 || day === 4) { // Tuesday, Thursday
    if (hour >= 13 && hour < 16) return icons.spain;
    if (hour >= 16 && hour < 20) return icons.france;
    if (hour >= 20 && hour < 22) return icons.india;
  }

  return icons.default;
}

// This function updates the browser action icon
function updateIcon() {
  const icon = getIcon();
  chrome.browserAction.setIcon({ path: icon });
}

// Update the icon when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  updateIcon();
  // Then update the icon every minute
  setInterval(updateIcon, 60000);
});
