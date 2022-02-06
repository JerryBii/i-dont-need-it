import SliderLimit from "./SliderLimit";
import "./Settings.css";
import apis from "../../api";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { X } from "react-bootstrap-icons";

const Settings = ({ user, setUser }) => {
  const [category, setCategory] = useState(null);

  return (
    <div className="container background-home">
      <h2 className="text-light pt-2">Settings</h2>
      <hr style={{ color: "white", borderColor: "white" }} />
      <SliderLimit
        title="Weekly Limit"
        defaultValue={user.weeklyLimit}
        callback={(value) => {
          apis.updateWeeklyLimit({ weeklyLimit: value });
          setUser({ ...user, weeklyLimit: value });
        }}
      />
      <br />
      <SliderLimit
        title="Monthly Limit"
        defaultValue={user.monthlyLimit}
        callback={(value) => {
          apis.updateMonthlyLimit({ monthlyLimit: value });
          setUser({ ...user, monthlyLimit: value });
        }}
      />
      <br />

      <h5 className="header-limit text-light text-white">Avoidance List</h5>

      <div className="container pb-3">
        <div className="row pt-2">
          {user.avoidanceList.map((tag) => (
            <div
              style={{
                borderRadius: "15px",
                border: "2px solid white",
                width: "max-content",
                height: "30px",
                margin: "2px",
                color: "white",
                fontFamily: "Courier !important",
              }}
            >
              {tag}{" "}
              <X
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const avoidanceList = user.avoidanceList.filter(
                    (item) => item !== tag
                  );
                  apis.updateAvoidanceList({
                    avoidanceList,
                  });
                  setUser({
                    ...user,
                    avoidanceList,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {category === null ? (
        <div
          onClick={() => setCategory("")}
          style={{
            width: "110px",
            height: "30px",
            margin: "2px",
            color: "white",
            fontFamily: "Courier !important",
            textAlign: "center",
          }}
        >
          + Add items
        </div>
      ) : (
        <FormControl
          type="text"
          value={category}
          placeholder="Enter category"
          onChange={(e) => setCategory(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (category.trim() !== "") {
                const avoidanceList = [...user.avoidanceList, category.trim()];
                apis.updateAvoidanceList({
                  avoidanceList,
                });
                setUser({
                  ...user,
                  avoidanceList,
                });
              }
              setCategory(null);
            }
          }}
        />
      )}
    </div>
  );
};

export default Settings;
