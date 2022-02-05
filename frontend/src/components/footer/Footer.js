import { HouseDoorFill, GearFill, List } from "react-bootstrap-icons";

const ICON_SIZE = 30;
export const PAGES = { home: 0, menu: 1, settings: 2, loading: 3 };

const Footer = ({ page, setPage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <HouseDoorFill
            size={ICON_SIZE}
            color={page === PAGES.home ? "black" : "grey"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPage(PAGES.home);
            }}
          />
        </div>
        <div className="col-3">
          <List
            size={ICON_SIZE + 5}
            color={page === PAGES.menu ? "black" : "grey"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPage(PAGES.menu);
            }}
          />
        </div>
        <div className="col-3">
          <GearFill
            style={{ cursor: "pointer" }}
            color={page === PAGES.settings ? "black" : "grey"}
            size={ICON_SIZE}
            onClick={() => {
              setPage(PAGES.settings);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
