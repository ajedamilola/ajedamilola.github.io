/* eslint-disable react/prop-types */
import { Badge, Col, Container, ProgressBar, Row, Stack } from "react-bootstrap"
import { FaBuilding } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

function About() {
  return (
    <div>
      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <h1 className="fw-bold display-5" data-aos='fade-right'>About Me</h1>
              <div className="text text-muted" data-aos='fade-right'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima vero assumenda aut at impedit,
                molestias numquam. Dolor, at veniam excepturi itaque, id animi ullam ex illo veritatis
                nihil quibusdam beatae?
              </div>
              <h2 className="fw-bold mt-5" data-aos='fade-right'>Work Experiences</h2>
              <div data-aos="fade-right">
                <Field title={"Practising Web Developer"} location={"Lagos, Nigeria"}
                  place={"Elitist Solution International"} type="Part Time"
                  color={"warning"} duration={"2019-2021"} />

                <Field title={"Fullstack Web Developer"} location={"Lagos, Nigeria"}
                  place={"Telserve Networks"} type="Full Time"
                  color={"success"} duration={"2021-Present"} />
              </div>

            </Col>
            <Col lg={6}>
              <h1 className="fw-bold display-" data-aos='fade'>Skills</h1>
              <Skill title={"Programming"} value={80} anim='fade-left' delay="000"/>
              <Skill title={"Problem Solving"} value={92} anim='fade-left' delay="200"/>
              <Skill title={"Design"} value={60} anim='fade-left' delay="300"/>
              <Skill title={"Collaboration"} value={70} anim='fade-left' delay="400"/>
              <Skill title={"Management"} value={80} anim='fade-left' delay="500"/>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  )
}

function Field({ title, place, location, duration, type, color }) {
  return <Row className="justify-content-between py-3">
    <Col xs={8}>
      <h5>{title}</h5>
      <Stack direction="horizontal" gap={1} className="text text-muted">
        <FaBuilding /> {place}
        <div style={{ flex: 1 }}></div>
        <MdLocationOn /> {location}
      </Stack>
    </Col>
    <Col className="text-end">
      <Badge bg={color}>{type}</Badge>
      <div className="text text-muted mt-2">{duration}</div>
    </Col>
    <Col xs={12}><hr /></Col>
  </Row>
}

function Skill({ title, value, anim, delay }) {
  return <div className="mb-3" data-aos={anim} data-aos-delay={delay}>
    <div className="text">{title}</div>
    <ProgressBar now={value} />
  </div>
}

export default About