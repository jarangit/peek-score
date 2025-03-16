chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Extension Loaded!");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "NOTIFY") {
    chrome.notifications.create("", {
      type: "basic",
      iconUrl: "icons/ps-icon.png",
      title: request.title || "📢 แจ้งเตือนใหม่!",
      message: request.message || "นี่คือข้อความแจ้งเตือน",
      priority: 2
    });
    sendResponse({ success: true });
  }
});