/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Mern Stack Developer", "Cloud Computing", "Graphic Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Aadhi sankaran`} <span className="txt-rotate" dataPeriod="3000" data-rotate='["Mern Stack Developer", "Cloud Computing","Graphic Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Results-driven MERN stack developer and Graphic Designer with expertise in
                    SQL/MySQL and AWS. I bridge refined visual design with scalable backend
                    architecture to build production-ready applications.
                    <br /><br />
                    {/* Inline Links for Portfolio/Experience */}
                    <strong>Portfolio & Experience:</strong>{" "}
                    <a href="https://github.com/your-username" target="_blank" rel="noreferrer" style={{ color: '#00f2fe', textDecoration: 'underline' }}>GitHub</a> |{" "}
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={{ color: '#00f2fe', textDecoration: 'underline' }}>LinkedIn</a>
                  </p>

                  {/* Let's Connect Link - Anchors to #connect section */}
                  <button onClick={() => window.location.href = '#connect'}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}