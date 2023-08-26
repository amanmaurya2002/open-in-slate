chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "openSlate",
        title: "Open in Slate",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "openScihub",
        title: "Open in Sci-Hub",
        contexts: ["link"]
    });
});
  
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openSlate") {
        const patentNumber = info.selectionText;
        chrome.tabs.create({ url: `https://tryslate.greyb.com/engage/${patentNumber}` });
    }

    if (info.menuItemId === "openScihub") {
        const researchLink = info.linkUrl;
        chrome.tabs.create({ url: `https://sci-hub.se/${researchLink}` });
    }
});
