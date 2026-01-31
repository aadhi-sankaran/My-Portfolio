/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                   <div className="skill-bx wow zoomIn">
    <h2>Skills</h2>

    <ul className="skill-list">
        <div className="skill-column">
            <li>MERN Stack</li>
            <li>Web Development</li>
            <li>Front-End Development</li>
            <li>UI/UX Design</li>
        </div>
        <div className="skill-column">
            <li>Graphic Design</li>
            <li>Relational Databases (SQL)</li>
            <li>AWS Cloud Computing</li>
            <li>My SQL</li>
        </div>
    </ul>

   <center><p className="skill-description" >
        I combine creative design thinking with rigorous engineering to solve complex problems 
        through clean code and engaging visuals.
    </p></center> 

                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    <div className="item">
                        <img src={meter1} alt="Image" />
                            <h5>MERN Stack Developer</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="Image" />
                            <h5>UI/UX Designer</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="Image" />
                            <h5>Graphic Designer</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image" />
                            <h5>My SQL</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image" />
                            <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="Image" />
                            <h5>AWS Cloud Computing</h5>
                    </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
    }
