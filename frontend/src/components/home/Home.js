import { useMemo, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Home.css";
import SavedMoney from "./savedmoney/savedMoney";

const Home = ({
  weeklySpent,
  weeklyLimit,
  monthlySpent,
  monthlyLimit,
  weeklySaved,
  monthlySaved,
}) => {
  const weeklyPercentage = useMemo(
    () => (weeklySpent / weeklyLimit) * 100,
    [weeklySpent, weeklyLimit]
  );
  const monthlyPercentage = useMemo(
    () => (monthlySpent / monthlyLimit) * 100,
    [monthlySpent, monthlyLimit]
  );

  return (
    <div className="container background-home">
      <h3 className="text-white header-home">your spending summary</h3>
      <div className="mt-3 mb-3 row text-white">
        <div className="col-6 text-white">
          <CircularProgressbar
            value={(weeklySpent * 100) / weeklyLimit}
            text={`$${weeklySpent}`}
            counterClockwise={true}
            styles={buildStyles({
              pathColor:
                weeklyPercentage < 75
                  ? "green"
                  : weeklyPercentage < 100
                  ? "gold"
                  : "red",
              textColor: "white",
            })}
          />
          <div className="header-graph pt-3">Weekly</div>
        </div>
        <div className="col-6">
          <CircularProgressbar
            value={(monthlySpent * 100) / monthlyLimit}
            text={`$${monthlySpent}`}
            counterClockwise={true}
            styles={buildStyles({
              pathColor:
                monthlyPercentage < 75
                  ? "green"
                  : monthlyPercentage < 100
                  ? "gold"
                  : "red",
              textColor: "white",
            })}
          />
          <div className="header-graph pt-3">Monthly</div>
        </div>
      </div>
      <hr style={{ color: "white", borderColor: "white" }} />
      <div>
        <SavedMoney monthlySaved={monthlySaved} weeklySaved={weeklySaved} />
      </div>
      <hr style={{ color: "white", borderColor: "white" }} />
    </div>
  );
};

export default Home;
