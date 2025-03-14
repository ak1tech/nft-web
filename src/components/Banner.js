import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ['Dreams!','Visual Artificial Intelligence...'];
  const period = 300;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleVideoClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const tick = useCallback(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(300);
      }
    }, [loopNum, toRotate, isDeleting, text, setDelta, setIsDeleting, setText, setLoopNum]);

  useEffect(() => {
      const ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker);
      };
    }, [delta, tick]);

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {() => (
                  <div className="animateanimated animatefadeIn">
                  <span className="tagline">THE</span>
                  <h1>
                      Unknown{' '}
                      <span data-rotate='["Dreams!","Visual Artificial Intelligence..."]'>
                          <span className="wrap">{text}</span>
                      </span>
                  </h1>
                  
                  <p>𝗚𝗲𝘁 𝗲𝘅𝗮𝗰𝘁𝗹𝘆 𝘄𝗵𝗮𝘁 𝘄𝗼𝗿𝗸𝘀 𝗳𝗼𝗿 𝘆𝗼𝘂𝗿 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀<span role="img" aria-label="alien monster emoji">✨</span></p>
                  
                  {/* Video trigger */}
                  <div className="video-trigger" onClick={handleVideoClick}>
                      <span className="video-text">𝘾𝙡𝙞𝙘𝙠 𝙩𝙤 𝙬𝙖𝙩𝙘𝙝 𝙖 𝙫𝙞𝙙𝙚𝙤</span>
                      <img 
                          src="https://i.ibb.co/4mWtWw6/1736458144470.png" 
                          alt="Video thumbnail" 
                          className="thumbnail-image"
                      />
                  </div>
              
                  <a href="#connect">
                      <button href="#connect">Let's Connect.<ArrowRightCircle size={25} /></button>
                  </a>
              </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {() => (
                  <div className="animateanimated animatezoomIn">
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <button className="close-button" onClick={handleCloseModal}>×</button>
                  <iframe
                      src="https://player.vimeo.com/video/1045460101?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Vimeo video"
                  ></iframe>
              </div>
          </div>
      )}
      </section>
    );
};