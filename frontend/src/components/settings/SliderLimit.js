import { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const SliderLimit = ({ title, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <div className="container p-2">
        <div className="row justify-content-between">
          <h6 className="col-8 text-secondary">{title}</h6>
          <div className="col-4 border text-align-right text-secondary">
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
        /*onAfterChange={}   ADD API CALL HERE   */
        handleStyle={{
          background: "white",
          borderColor: "grey",
          width: 20,
          height: 20,
          marginTop: -8,
        }}
        trackStyle={{
          backgroundColor: "purple",
        }}
        railStyle={{
          height: 2,
        }}
      />
    </>
  );
};

export default SliderLimit;
