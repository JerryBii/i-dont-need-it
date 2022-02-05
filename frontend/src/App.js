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
    totalSpent: 150,
    monthlyLimit: 800,
    weeklyLimit: 300,
    totalProducts: 3,
    purchases: [
      {
        dateTime: new Date("August 19, 2001 23:15:30").toISOString(),
        product: "Tennis Racket",
        price: 69,
        category: "Sports",
      },
      {
        dateTime: new Date("January 20, 2001 23:15:30").toISOString(),
        product: "Martial arts equipment",
        price: 60,
        category: "Sports",
      },
      {
        dateTime: new Date("Feb 15, 2001 23:15:30").toISOString(),
        product: "Rocket League",
        price: 10,
        category: "Games",
      },
    ],
    avoidanceList: ["Technology", "Cosmetics"],
  });

  const [page, setPage] = useState(PAGES.home);

  return (
    <div className="container">
      <div>Page number = {page}</div>
      <br />
      <div className="row d-flex justify-content-center">
        <Header />
      </div>
      <div className="row">
        <div className="col-3">
          <Home />
        </div>
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-3">
          <Settings user={user} setUser={setUser} />
        </div>
      </div>
      <br />
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default App;
