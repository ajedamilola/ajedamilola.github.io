import { Col, Container, Row, Stack } from "react-bootstrap"
import { FaCss3, FaDatabase, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaWordpress,  } from "react-icons/fa"
import mogo from "../assets/mongo.png"
import express from "../assets/express.png"
import redux from "../assets/redux.png"
import firebase from "../assets/firebase.png"
import bootstrap from "../assets/bootstrap.png"
import flutter from "../assets/flutter.png"
function TechStack() {
  const MongoIcon = () => <img src={mogo} className="tech" />;
  const ExpressIcon = () => <img src={express} className="tech" />;
  const Redux = () => <img src={redux} className="tech" />;
  const Bootstrap = () => <img src={bootstrap} className="tech" />;
  const Firebase = () => <img src={firebase} className="tech" />;
  const Flutter = () => <img src={flutter} className="tech" />;
  const techs = [
    { color: "red", name: "HTML", icon: FaHtml5, years: 5 },
    { color: "#e6e600", name: "Javascript", icon: FaJsSquare, years: 5 },
    { color: "#0066ff", name: "CSS", icon: FaCss3, years: 5 },
    { color: "#0066ff", name: "React JS", icon: FaReact, years: 3 },
    { color: "green", name: "NodeJs", icon: FaNodeJs, years: 3 },
    { color: "#777", name: "Github", icon: FaGithub, years: 3 },
    { color: "none", name: "Express JS", icon: ExpressIcon, years: 3 },
    { color: "hotpink", name: "SASS", icon: FaSass, years: 3 },
    { color: "none", name: "Redux", icon: Redux, years: 3 },
    { color: "purple", name: "Bootstrap", icon: Bootstrap, years: 3 },
    { color: "#0066ff", name: "PHP", icon: FaPhp, years: 4 },
    { color: "orange", name: "SQL", icon: FaDatabase, years: 4 },
    { color: "green", name: "Mongodb", icon: MongoIcon, years: 3 },
    { color: "#0066ff", name: "Wordpress", icon: FaWordpress, years: 3 },
    { color: "orange", name: "Firebase", icon: Firebase, years: 2 },
    { color: "#0066ff", name: "Python", icon: FaPython, years: 2 },
    { color: "none", name: "Flutter", icon: Flutter, years: 1 },
  ]
  return (
    <div>
      <section className="section tech-stack">
        <Container>
          <div className="text-center">
            <h1 className="fw-bold display-5">
              My Tech Stack
            </h1>
            <p>Technologies I have been working with Over the years.</p>
          </div>
          <Row>
            {techs.map(tech => {
              return <Col key={tech.name} xs={6} md={3} lg={2}>
                <Stack className="align-items-center justify-content-center h-100">
                  {tech.color != "null" ? tech.icon({ color: tech.color, size: 80, className: 'tech' }) : tech.icon()}
                  <div className="text-center bg-primary text-white p-1 mt-1 rounded-2">
                    <b>{tech.name}</b><br />
                    Experience: <b>{tech.years} Years</b>
                  </div>
                </Stack>
              </Col>
            })}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default TechStack