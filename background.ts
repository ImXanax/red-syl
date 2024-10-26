export {}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse({ status: "Pattern set successfully!" })

  chrome.webNavigation.onBeforeNavigate.addListener(function (dets) {
    if (message) {
      if (dets.url.includes(message)) {
        const newUrl = dets.url.replace(message, "google.com")
        chrome.tabs.update(dets.tabId, { url: newUrl })
      }
    }
  })
})
