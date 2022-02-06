import { useState } from "react";
import Slider from "rc-slider";
import "./Settings.css";
import "rc-slider/assets/index.css";
import apis from "../../api";

const SliderLimit = ({ title, defaultValue, callback }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <div className="container p-2">
        <div className="row justify-content-between">
          <h6 className="col-8 text-white header-limit">{title}</h6>
          <div className="col-4 text-align-right text-white header-limit">
            ${value}.00
          </div>
        </div>
      </div>
      <Slider
        min={0}
        max={3000}
        step={1}
        defaultValue={value}
        onChange={setValue}
        onAfterChange={callback}
        handleStyle={{
          background: "white",
          borderColor: "grey",
          width: 20,
          height: 20,
          marginTop: -8,
        }}
        trackStyle={{
          backgroundColor: "green",
        }}
        railStyle={{
          height: 2,
        }}
      />
    </>
  );
};

export default SliderLimit;
