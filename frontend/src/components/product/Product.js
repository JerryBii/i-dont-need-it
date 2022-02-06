import { useMemo, useEffect, useState } from "react";
import uwlogo from "./uwlogo.png";
import "./Product.css";
import apis from "../../api";

const PRODUCT_TYPES = {
  underBudget: 0,
  blacklisted: 1,
  overBudget: 2,
};

const RenderProduct = ({ product }) => (
  <div className="d-flex justify-content-evenly p-3">
    <div>
      <img
        style={{ borderRadius: "15px" }}
        src={product.imageSrc}
        alt=""
        width={150}
        height={150}
      />
    </div>
    <div style={{ margin: "auto", width: "60%", padding: "10px" }}>
      <h5 className="text-white text-center defaultText">{product.title}</h5>
      <h5 style={{ color: "#59E767" }} className="text-center defaultText">
        {product.rating} <span className="text-white">stars</span>
      </h5>
    </div>
  </div>
);

const RenderSmallBusinesses = () => (
  <>
    <div
      className="text-white text-center defaultText pb-2"
      style={{ fontWeight: "bold" }}
    >
      we noticed you are shopping on amazon.ca. consider purchasing this from
      local small businesses such as
    </div>
    <div className="container p-2 pb-4">
      <div className="row justify-content-between">
        <div className="col-2">
          <img src={uwlogo} alt="" width={75} height={60} />
        </div>
        <a
          style={{ margin: "auto", width: "60%", padding: "10px" }}
          className="col-8 text-center text-white defaultText"
          href="https://wstore.uwaterloo.ca/"
        >
          wstore.uwaterloo.ca
        </a>
      </div>
    </div>
  </>
);

const Product = ({
  product,
  monthlySpent,
  monthlyLimit,
  weeklySpent,
  weeklyLimit,
  avoidanceList,
  monthlySaved,
  weeklySaved,
  weeklyItemsNotPurchased,
  monthlyItemsNotPurchased,
  setUser,
}) => {
  const updatedMonthlySpent = useMemo(
    () => monthlySpent + product.price,
    [monthlySpent, product.price]
  );
  const updatedWeeklySpent = useMemo(
    () => weeklySpent + product.price,
    [weeklySpent, product.price]
  );

  const productType = useMemo(() => {
    if (avoidanceList.includes(product.category)) {
      return PRODUCT_TYPES.blacklisted;
    }
    if (
      updatedMonthlySpent > monthlyLimit ||
      updatedWeeklySpent > weeklyLimit
    ) {
      return PRODUCT_TYPES.overBudget;
    }
    return PRODUCT_TYPES.underBudget;
  }, [
    avoidanceList,
    product.category,
    updatedMonthlySpent,
    monthlyLimit,
    updatedWeeklySpent,
    weeklyLimit,
  ]);

  useEffect(() => {
    (async () => {
      let savedMonth = {
        monthlySaved: monthlySaved + product.price * 1.13,
      };
      let savedWeek = {
        weeklySaved: weeklySaved + product.price * 1.13,
      };
      let totalItemsWeek = {
        weeklyItemsNotPurchased: weeklyItemsNotPurchased + 1,
      };
      let totalItemsMonth = {
        monthlyItemsNotPurchased: monthlyItemsNotPurchased + 1,
      };
      await apis.updateMonthlyItemslyNotPurchased(totalItemsMonth);
      await apis.updateWeeklyItemsNotPurchased(totalItemsWeek);
      await apis.updateMonthlySaved(savedMonth);
      await apis.updateWeeklySaved(savedWeek);
      const response = await apis.getUser();
      setUser(response.data.data);
    })();
  }, []);

  switch (productType) {
    case PRODUCT_TYPES.blacklisted:
      return (
        <>
          <div className="container background-home">
            <RenderProduct product={product} />
            <div className="text-center text-white defaultText">
              this product is
            </div>
            <h1
              className="text-center p-2"
              style={{ color: "red", fontWeight: "bold" }}
            >
              BLACKLISTED
            </h1>
            <div className="text-center text-white defaultText">
              as it falls under the {product.category} category
            </div>
            <hr style={{ borderTop: "2px solid white" }} />
            <RenderSmallBusinesses />
          </div>
        </>
      );
    case PRODUCT_TYPES.overBudget:
      return (
        <div className="container background-home">
          <RenderProduct product={product} />
          <div className="text-center text-white defaultText">
            purchasing this product will put you
          </div>
          <h1
            className="text-center p-2"
            style={{ color: "red", fontWeight: "bold" }}
          >
            OVERBUDGET
          </h1>
          <div className="text-center text-white defaultText">
            reconsider if this is absolutely necessary!
          </div>
          <hr style={{ borderTop: "2px solid white" }} />
          <RenderSmallBusinesses />
        </div>
      );
    default:
      return (
        <div className="container background-home">
          <RenderProduct product={product} />
          <div className="text-center text-white defaultText">
            are you sure you need this? you could save
          </div>
          <h1
            className="text-center p-2"
            style={{ color: "red", fontWeight: "bold" }}
          >
            ${product.price}
          </h1>
          <div className="text-center text-white defaultText">
            that money could be put into your savings for tuition!
          </div>
          <hr style={{ borderTop: "2px solid white" }} />
          <RenderSmallBusinesses />
        </div>
      );
  }
};

export default Product;
