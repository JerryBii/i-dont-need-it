let imageSrc = document.getElementById("imgTagWrapperId").children[0].src;
let price = parseInt(
  document
    .getElementById("corePrice_feature_div")
    .children[0].children[0].children[0].innerText.substring(1)
);
let rating = parseFloat(
  document.getElementById("acrPopover").title.split(" ")[0]
);


window.addEventListener(
  "message",
  (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
      return;
    }

    if (event.data.type && event.data.type == "FROM_PAGE") {
      console.log("Content script received: " + event.data.text);
    }
  },
  false
);
