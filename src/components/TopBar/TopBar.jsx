import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            emily lane
          </a>
          <div className="itemContainer"></div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  );
}
