import React from 'react';
import 'animate.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard";
import { ProjectCard3 } from "./ProjectCard";
import gd from "../assets/img/g&d.jpg";
import ff from "../assets/img/f&f.jpg";
import bs from "../assets/img/b&s.jpg";
import ai from "../assets/img/unknownbot.png";
import vr from "../assets/img/v&r.jpg";
import vp from "../assets/img/vp.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import ak1 from "../assets/img/01.png";
import x from "../assets/img/twitter-x.png";
// import apple from "../assets/img/apple.png";
import wb from "../assets/img/w.png";
// import ufox2 from "../assets/img/ufo x02.png";
// import ufox3 from "../assets/img/ufo x03.png";
// import ufox4 from "../assets/img/ufo x04.png";
// import ufox5 from "../assets/img/ufo x05.png";
// import ufox6 from "../assets/img/ufo x06.png";
// import ufox7 from "../assets/img/ufo x07.png";
// import ufox8 from "../assets/img/ufo x08.png";
// import ufox9 from "../assets/img/ufo x09.png";

export const VAI = () => {

  const projects = [
    {
      title: "⭐Visioning & Research",
      description: "Elevate your brand with our expert research on competitors. By analyzing their logos and branding, we identify trends that will help you stand out in your industry. Position your brand for success and attract your target audience with our tailored insights!",
      imgUrl: vr,
    },
    {
      title: "⭐Brainstorming & Sketching",
      description: "We’ll create unique ideas that reflect your brand's essence using powerful symbols and imagery. Let us help you visualize your message and build a strong brand identity that truly stands out. Together, we can elevate your brand and connect with your audience!",
      imgUrl: bs,
    },
    {
      title: "⭐Design & Refining",
      description: "We’ll refine your sketches into a few strong logo ideas, focusing on color, typography, and simplicity. Our goal is to create a logo that is versatile, timeless, and unique. Let us help you build a brand identity that stands out and makes a lasting impression!",
      imgUrl: ai,
    },
    {
      title: "⭐Feedback & Finalization",
      description: "Once the design is refined and approved, we’ll finalize your logo to ensure it’s versatile and effective across all mediums, from print to digital. We value your feedback and will make any necessary adjustments to guarantee the final design perfectly meets your vision.",
      imgUrl: ff,
    },
    {
      title: "⭐Delivery & Guidelines",
      description: "Upon delivering your logo, we’ll provide comprehensive guidelines to help you use it effectively and maintain its integrity across all platforms. We’re committed to your success and will offer ongoing support and assistance whenever you need it, ensuring your brand shines everywhere!",
      imgUrl: gd,
    },
    {
      title: "⭐Validate & Protect",
      description: "Safeguard your brand by trademarking your logo! This crucial step boosts visibility and stability. With the UnknownVAI trademark, you'll elevate your brand and ensure it stands out. Let us help secure your brand’s future!",
      imgUrl: vp,
    },
  ];
////////////////////////////////////////////////////
  const projects2 = [
    {
      title: "AK Empire",
      link: "https://twitter.com/Kevn1X/status/1785804666082886043?t=l6v4uarwNqjUG9lQyCO4tw&s=19",
      description: "Click!",
      imgUrl: ak1,
      id: "@Rare4art",
      link2: "https://t.me/Rare4art"
    },
    {
      title: "𝕏",
      link: "https://twitter.com/UnknownVAI/status/1827952398398345242",
      description: "Click!",
      imgUrl: x,
      id: "@Elonmusk",
      link2: "https://twitter.com/elonmusk"
    },
    // {
    //   title: "Apple",
    //   link: "https://bsky.app/profile/unknownvai.com/post/3lb2pn55hxk2p",
    //   description: "Click!",
    //   imgUrl: apple,
    //   id: "@Apple",
    //   link2: "https://www.apple.com"
    // },
    {
      title: "Warren Buffett",
      // link: "https://twitter.com/Kevn1X/status/1785804666082886043?t=l6v4uarwNqjUG9lQyCO4tw&s=19",
      description: "Upcoming!",
      imgUrl: wb,
      id: "@WarrenBuffett",
      link2: "https://www.berkshirehathaway.com"
    },
  ];

  ///////////////////////////////////////////////////
  const projects3 = [
    {
      title: "AK Empire",
      link: "https://twitter.com/Kevn1X/status/1785804666082886043?t=l6v4uarwNqjUG9lQyCO4tw&s=19",
      description: "💎",
      imgUrl: ak1,
      id: "@Rare4art",
      link2: "https://t.me/Rare4art"
    },
  ];  
  return (
    <section className="vai" id="vai">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>VAI</h2>
                <p>Built just for you</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Steps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Stories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">RaRi</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <span>
                     <span role="img" aria-label="star">⭐️</span>
                     <span role="img" aria-label="star">⭐️</span>
                     <span role="img" aria-label="star">⭐️</span>
                     <span role="img" aria-label="star">⭐️</span>
                     <span role="img" aria-label="star">⭐️</span>
                     <span role="img" aria-label="star">⭐️</span>
                    </span>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                     </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <span>Everyone has a Story<span role="img" aria-label="book">📖</span></span>
                      <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <span><span role="img" aria-label="gem">💎</span>All Time High<span role="img" aria-label="gem">💎</span></span>
                      <Row>
                        {
                          projects3.map((project3, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
