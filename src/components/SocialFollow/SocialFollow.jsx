import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./SocialFollow.scss";
// import { SocialList } from "../../social";

export default function SocialFollow() {
  //   const [selected, setSelected] = useState("socialclick");
  //   const [data, setData] = useState([]);
  //   const socialList = [
  //     {
  //       id: "github",
  //       title: "github",
  //     },
  //     {
  //       id: "linkedin",
  //       title: "linkedin",
  //     },
  //     {
  //       id: "instagram",
  //       title: "instagram",
  //     },
  //     {
  //       id: "codepen",
  //       title: "codepen",
  //     },
  //   ];

  //   useEffect(() => {
  //       switch(selected){
  //           case "github":
  //               setData()
  //       }
  //   })
  return (
    <div className="socialFollow">
      <ul>
        {/* {socialList.map((item) => (
          <SocialList
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        ; */}
        <li>
          <InstagramIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <GitHubIcon />
        </li>
      </ul>
    </div>
  );
}
