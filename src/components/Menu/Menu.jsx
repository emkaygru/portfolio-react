import "./Menu.scss";
import "../SocialFollow/SocialFollow.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Menu({ menuOpen, setMenuOpen }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="socialFollow">
        <ul className=" menuFooter">
          <li className="socialLink">
            <GitHubIcon onClick={onClickUrl("https://github.com/emkaygru")} />
          </li>
          <li className="socialLink">
            <LinkedInIcon
              onClick={onClickUrl("https://www.linkedin.com/in/emilykayg/")}
            />
          </li>
          <li className="socialLink">
            <InstagramIcon
              onClick={onClickUrl("https://www.instagram.com/emquebuena")}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
