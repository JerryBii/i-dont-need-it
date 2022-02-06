import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer, { PAGES } from "./components/footer/Footer";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Settings from "./components/settings/Settings";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({
    //shows user how much they've spent and how much more they can spend
    weeklySpent: 150,
    monthlySpent: 300,
    weeklyLimit: 300,
    monthlyLimit: 800,
    //user's progress: how much they've been saving!
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
    avoidanceList: ["Technology", "Cosmetics"],
  });

  const [page, setPage] = useState(PAGES.home);

  const [product, setProduct] = useState(null);

  /* eslint-disable no-undef */
  useEffect(() => {
    chrome.runtime.onMessage.addListener((product) => {
      setProduct(product);
    });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
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
          chrome.runtime.sendMessage({ imageSrc, price, rating });
        },
      });
    });
  });
  /* eslint-enable no-undef */

  return (
    <div className="container">
      <div>Page number = {page}</div>
      <div>Product details = {JSON.stringify(product)}</div>
      <br />
      <div className="row d-flex justify-content-center">
        <Header />
      </div>
      <div className="row">
        {/* <div className="col-3">
          <Home user={user} />
        </div>
        <div className="col-3">
          <Menu />
        </div> */}
        {/* <div className="col-3"> */}
        <Settings user={user} setUser={setUser} />
        {/* </div> */}
      </div>
      <br />
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default App;
