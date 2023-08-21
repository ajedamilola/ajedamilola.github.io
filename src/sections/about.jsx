import { Col, Container, Row } from "react-bootstrap"

function About() {
  return (
    <div>
      <section className="section">
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className="fw-bold display-5">About Me</h1>
              <div className="text text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima vero assumenda aut at impedit,
                molestias numquam. Dolor, at veniam excepturi itaque, id animi ullam ex illo veritatis
                nihil quibusdam beatae?
              </div>
              <h1 className="fw-bold display-5 mt-5">Work Experiences</h1>

            </Col>
            <Col lg={6}>
              <h1 className="fw-bold display-5">Skills</h1>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  )
}

export default About