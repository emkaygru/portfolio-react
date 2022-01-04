import "./TopBar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function TopBar(menuOpen, setMenuOpen) {
  return (
    <div className={"topbar" + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            emily lane
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+1-720-323-8220</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>lane.emilykay@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
