import "./App.css";
import { useEffect, useState } from "react";
import Header, { PAGES } from "./components/header/Header";
import Home from "./components/home/Home";
import Settings from "./components/settings/Settings";
import Product from "./components/product/Product";
import "bootstrap/dist/css/bootstrap.css";
import apis from "./api";

const App = () => {
  const [user, setUser] = useState({
    weeklySpent: 300.0,
    weeklyLimit: 350.0,
    monthlySpent: 0.0,
    monthlyLimit: 800.0,
    weeklyItemsNotPurchased: 0,
    monthlyItemsNotPurchased: 4,
    weeklySaved: 100,
    monthlySaved: 300,
    purchases: [
      {
        product: "Tennis Racket",
        price: 69,
        category: "Sports",
        store: "Amazon",
      },
      {
        product: "Martial arts equipment",
        price: 60,
        category: "Sports",
        store: "Amazon",
      },
      {
        product: "Rocket League",
        price: 10,
        category: "Games",
        store: "Amazon",
      },
    ],
    avoidanceList: ["Technology", "Toys"],
  });

  const [page, setPage] = useState(PAGES.home);

  const [product, setProduct] = useState({
    title: "BBQ set",
    imageSrc: "https://m.media-amazon.com/images/I/61yVJOyntwL._AC_SL1200_.jpg",
    price: 200.99,
    rating: 4.5,
    category: "Toys",
  });

  /* eslint-disable no-undef */
  useEffect(() => {
    (async () => {
      const response = await apis.getUser();
      console.log(response.data.data);
      setUser(response.data.data);
    })();

    // chrome.runtime.onMessage.addListener((product) => {
    //   setProduct(product);
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   if (tabs[0].url.includes("/dp/")) {
    //     chrome.scripting.executeScript({
    //       target: { tabId: tabs[0].id },
    //       function: () => {
    //         const imageSrc =
    //           document.getElementById("imgTagWrapperId").children[0].src;
    //         const temp = document.getElementById("corePrice_feature_div")
    //           .children[0].children;
    //         const price = parseInt(
    //           temp[temp.length - 1].children[0].innerText.substring(1)
    //         );
    //         const rating = parseFloat(
    //           document.getElementById("acrPopover").title.split(" ")[0]
    //         );
    //         const title = document.getElementById("productTitle").innerText;
    //         const category = document.getElementById("nav-subnav").children[0].innerText
    //         chrome.runtime.sendMessage({ title, imageSrc, price, rating, category });
    //       },
    //     });
    //   }
    // });
  }, []);
  /* eslint-enable no-undef */

  useEffect(() => {
    if (product !== null) {
      setPage(PAGES.product);
    }
  }, [product]);

  return (
    <div className="container">
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
