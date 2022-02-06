import "react-circular-progressbar/dist/styles.css";
import "../Home.css";

const SavedMoney = ({ weeklySaved, monthlySaved }) => {
  return (
    <div>
      <div>
        {monthlySaved >= 100 ? (
          <h3 className="text-white header-home">great job! you saved</h3>
        ) : monthlySaved > 0 ? (
          <h3 className="text-white header-home">so far you have saved</h3>
        ) : (
          <h3 className="text-white header-home">nothing so far</h3>
        )}
      </div>
      <div>
        <h1 className="text-center text-white">${monthlySaved}</h1>
      </div>
      <div>
        {monthlySaved > 0 ? (
          <h3 className="text-white header-home">
            this month by not overconsuming!
          </h3>
        ) : (
          <h3 className="text-white header-home">
            IDNI will keep track of your habits as you shop
          </h3>
        )}
      </div>
    </div>
  );
};

export default SavedMoney;
