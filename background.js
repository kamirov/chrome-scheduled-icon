// Define the flag icons
const icons = {
  france: 'icons/france.png',
  spain: 'icons/spain.png',
  india: 'icons/india.png',
  russia: 'icons/russia.png',
  default: 'icons/default.png',
};

// This function gets the correct icon based on the current time and day of the week
function getIcon() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  if (day === 1 || day === 3 || day === 5 || day === 7) { // Monday, Wednesday, Friday, Sunday
    if (hour >= 8 && hour < 11) return icons.france;
    if (hour >= 11 && hour < 14) return icons.spain;
    if (hour >= 14 && hour < 15) return icons.russia;
    if (hour >= 15 && hour < 17) return icons.india;
    if (hour >= 17 && hour < 20) return icons.france;
    if (hour >= 20 && hour < 23) return icons.spain;
  } else if (day === 2 || day === 4 || day === 6) { // Tuesday, Thursday, Saturday
    if (hour >= 8 && hour < 11) return icons.spain;
    if (hour >= 11 && hour < 14) return icons.france;
    if (hour >= 14 && hour < 15) return icons.spain;
    if (hour >= 15 && hour < 17) return icons.india;
    if (hour >= 17 && hour < 20) return icons.spain;
    if (hour >= 20 && hour < 23) return icons.france;

  }

  return icons.default;
}

// This function updates the browser action icon
function updateIcon() {
  const icon = getIcon();
  chrome.action.setIcon({ path: icon });
}

// Update the icon when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  updateIcon();
  // Then update the icon every minute
  setInterval(updateIcon, 60000);
});
