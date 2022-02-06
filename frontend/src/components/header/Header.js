import "./Header.css";
import { GearFill, XLg } from "react-bootstrap-icons";
import { useState } from "react";

const ICON_SIZE = 30;
export const PAGES = {
  home: 0,
  menu: 1,
  settings: 2,
  loading: 3,
  product: 4,
  none: 5,
};

const Header = ({ page, setPage }) => {
  const [prevPage, setPrevPage] = useState(null);

  return (
    <div className="fixed-top sticky-top background">
      <h2 className="header text-light">IDNI</h2>
      {page === PAGES.settings ? (
        <XLg
          style={{
            display: "inline-block",
            cursor: "pointer",
            float: "right",
            marginTop: "1%",
          }}
          color={"white"}
          size={ICON_SIZE}
          onClick={() => {
            setPage(prevPage);
            setPrevPage(null);
          }}
        />
      ) : (
        <GearFill
          style={{
            display: "inline-block",
            cursor: "pointer",
            float: "right",
            marginTop: "1%",
          }}
          color={"white"}
          size={ICON_SIZE}
          onClick={() => {
            setPrevPage(page);
            setPage(PAGES.settings);
          }}
        />
      )}
    </div>
  );
};

export default Header;
