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

  const [url, setUrl] = useState("");
  const [ratings, setRatings] = useState(0);

  /* eslint-disable no-undef */
  useEffect(() => {
    chrome.tabs &&
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);

        // chrome.windows.get(tabs[0].windowId, function (window) {
        //   console.log(wi)
        //   window.addEventListener(
        //     "message",
        //     (event) => {
        //       // We only accept messages from ourselves
        //       setRatings(event.data.ratings);
        //       console.log(event);
        //       // port.postMessage(event.data.text);
        //     },
        //     false
        //   );
        // });
      });

      window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");

  }, []);
  /* eslint-disable no-undef */

  return (
    <div className="container">
      <div>Page number = {page}</div>
      <div>URL = {url}</div>
      <div>ratings = {ratings}</div>
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
