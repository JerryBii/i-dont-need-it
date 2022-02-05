import SliderLimit from "./SliderLimit";

const Settings = ({ user, setUser }) => {
  return (
    <>
      <h3 className="text-secondary">Settings</h3>
      <hr />

      <SliderLimit title="Weekly Limit" defaultValue={user.weeklyLimit} />
      <br />
      <SliderLimit title="Monthly Limit" defaultValue={user.monthlyLimit} />
      <br />

      <h5 className="text-secondary">Avoidance List</h5>

      <div className="container">
        <div className="row">
          {user.avoidanceList.map((tag) => (
            <div
              style={{
                borderRadius: "15px",
                border: "2px solid grey",
                width: "max-content",
                height: "30px",
                margin: "2px",
                color: "grey",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
