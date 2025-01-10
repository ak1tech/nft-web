import React from 'react';
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Services = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 1920, min: 1080 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 1366, min: 768 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 768, min: 1024 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 360, min: 720 },
  //     items: 1
  //   }
  // };

  return (
    <section className="services" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="services-bx wow zoomIn">
                        <h2>-- Services --</h2><br></br><br></br>
                        <p><h2>* Design<span role="img" aria-label="rocket">🔮</span></h2>Designing unique logos for brands, early-stage startups, businesses, and companies using our 6-Step<span role="img" aria-label="star">⭐️</span> Design Process.</p> <h3>A good logo builds<br></br>a brand. <br></br><br></br>A great logo builds<br></br>a connection.<br></br><br></br>A good logo builds <br></br>trust. <br></br><br></br>A great logo builds <br></br>legacies.<br></br><br></br>A good logo builds <br></br>awareness.<br></br><br></br>A great logo builds <br></br>loyalty.</h3> <p>"Our job is not to make it complicated. Our job is to make it simple, memorable, iconic, and understandable."<br></br>One-time timeless deal<span role="img" aria-label="handshake">🤝</span><br></br><br></br><br></br><h2>* Storytelling<span role="img" aria-label="rocket">🛸</span></h2> Every client has a story, and every story deserves a logo that feels alive. When people feel part of your brand, they become loyal customers. Tell your story here today.</p>
                        {/* <Carousel responsive={responsive} infinite={true} className="-slider">come.
                            <div className="item">
                                <img src={meter1} alt="ak" />
                                <h5>0%</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ak" />
                                <h5>3%</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="ak" />
                                <h5>0%</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ak" />
                                <h5>3%</h5>
                            </div>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="background-image-left">
          <img src={colorSharp} alt="ak" />
        </div>
        <div className="background-image-right">
          <img src={colorSharp2} alt="ak" />
        </div>
    </section>
  )
}
