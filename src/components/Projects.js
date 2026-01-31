import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Students Records Mnagement System.png";
import projImg2 from "../assets/img/KEFI Website.png";
import projImg3 from "../assets/img/Book Cart.png";
import projImg4 from "../assets/img/Excel Analytics (2).png";
import projImg5 from "../assets/img/Pizzeria.png";
import projImg6 from "../assets/img/Greenland Builders.png";
import projImg7 from "../assets/img/Blood Bank.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Students Record Management System",
      description: "Development using React",
      imgUrl: projImg1,
      category: "Tab 1"
    },
    {
      title: "Blog Website",
      description: "Design & Development using HTML, CSS",
      imgUrl: projImg2,
      category: "Tab 1"
    },
    {
      title: "Book Cart",
      description: "Development using React",
      imgUrl: projImg3,
      category: "Tab 1"
    },
    {
      title: "Excel Analytics",
      description: "Development using HTML, CSS, JS",
      imgUrl: projImg4,
      category: "Tab 1"
    },
    {
      title: "Food Website",
      description: "UI/UX Design using Figma",
      imgUrl: projImg5,
      category: "Tab 2"
    },
    {
      title: "Construction Website",
      description: "UI/UX Design using Figma",
      imgUrl: projImg6,
      category: "Tab 2"
    },
    {
      title: "Blood Bank Mobile Applications",
      description: "UI/UX Design using Figma",
      imgUrl: projImg7,
      category: "Tab 3"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  A curated selection of real-world projects demonstrating my expertise in full-stack web development, 
                  UI/UX & graphic design, and cloud-based solutions.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.filter(p => p.category === "Tab 1").map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.filter(p => p.category === "Tab 2").map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects.filter(p => p.category === "Tab 3").map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}