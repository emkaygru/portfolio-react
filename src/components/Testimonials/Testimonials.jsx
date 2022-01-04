import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Outreach, Inc.",
      title: "Web and Email Marketing",
      img: "assets/outreach.png",
      icon: "assets/twitter.png",
      desc: "Built and conceived optimized emails and landing pages based on mockups from the design team.",
    },
    {
      id: 2,
      name: "Outreach, Inc.",
      title: "Web Design & Tech Supoprt",
      img: "assets/outreach.png",
      icon: "assets/youtube.png",
      desc: "Built Wordpress Sites with Divi Visual builder. Offered tech and design services for clients along with managing all DNS transfers. Instructed clients on best Social Media Practices",
      featured: true,
    },
    {
      id: 3,
      name: "Freelance",
      title: "Web & Social Media Manager",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Identified target market and key segments through in-depth analysis of markets and related trends. Utilized multiple Social Media content planning programs to automate the process based off of the client’s needs. Oversaw app and website builds and managed content as needed.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img className="user" src={d.img} alt="" />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
