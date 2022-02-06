import "./App.css";
import { useEffect, useState } from "react";
import Header, { PAGES } from "./components/header/Header";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import Product from "./components/product/Product";
import "bootstrap/dist/css/bootstrap.css";
import apis from "./api";

const App = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(PAGES.none);
  const [product, setProduct] = useState(null);

  /* eslint-disable no-undef */
  useEffect(() => {
    (async () => {
      const response = await apis.getUser();
      setUser(response.data.data);
    })();

    chrome.runtime.onMessage.addListener((product) => {
      setProduct(product);
    });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].url.includes("/dp/")) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            const imageSrc =
              document.getElementById("imgTagWrapperId").children[0].src;
            const temp = document.getElementById("corePrice_feature_div")
              .children[0].children;
            const price = parseInt(
              temp[temp.length - 1].children[0].innerText.substring(1)
            );
            const rating = parseFloat(
              document.getElementById("acrPopover").title.split(" ")[0]
            );
            const title = document.getElementById("productTitle").innerText;
            const category =
              document.getElementById("nav-subnav").children[0].innerText;
            chrome.runtime.sendMessage({
              title,
              imageSrc,
              price,
              rating,
              category,
            });
          },
        });
      }
    });
  }, []);
  /* eslint-enable no-undef */

  useEffect(() => {
    if (user !== null) {
      if (product !== null) {
        setPage(PAGES.product);
      } else {
        setPage(PAGES.home);
      }
    } else {
      setPage(PAGES.none);
    }
  }, [product, user]);

  return (
    <div className="container background-app" style={{ background: "#404040" }}>
      <div className="row d-flex justify-content-center">
        <Header page={page} setPage={setPage} />
      </div>
      <div className="row">
        {page === PAGES.home && (
          <Home
            weeklySpent={user.weeklySpent}
            weeklyLimit={user.weeklyLimit}
            monthlySpent={user.monthlySpent}
            monthlyLimit={user.monthlyLimit}
            weeklySaved={user.weeklySaved}
            monthlySaved={user.monthlySaved}
          />
        )}
        {page === PAGES.product && (
          <Product
            product={product}
            weeklySpent={user.weeklySpent}
            weeklyLimit={user.weeklyLimit}
            monthlySpent={user.monthlySpent}
            monthlyLimit={user.monthlyLimit}
            avoidanceList={user.avoidanceList}
            weeklySaved={user.weeklySaved}
            monthlySaved={user.monthlySaved}
            weeklyItemsNotPurchased={user.weeklyItemsNotPurchased}
            monthlyItemsNotPurchased={user.monthlyItemsNotPurchased}
          />
        )}
        {page === PAGES.settings && <Settings user={user} setUser={setUser} />}
      </div>
      <br />
    </div>
  );
};

export default App;
