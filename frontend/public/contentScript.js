
/* eslint-disable no-undef */
chrome.tabs.create({
    url: chrome.extension.getURL('index.html'),
    active: false
}, function(tab) {
    // After the tab has been created, open a window to inject the tab
    chrome.windows.create({
        tabId: tab.id,
        type: 'popup',
        focused: true
        // incognito, top, left, ...
    });
});
/* eslint-enable no-undef */