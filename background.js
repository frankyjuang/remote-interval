// Listen to history.pushState and inject content script manually.
browser.webNavigation.onHistoryStateUpdated.addListener(
  () => {
    browser.tabs.executeScript({ file: "/index.js" });
  },
  {
    url: [
      {
        hostEquals: "stackoverflow.com",
        pathEquals: "/jobs",
      },
    ],
  }
);
