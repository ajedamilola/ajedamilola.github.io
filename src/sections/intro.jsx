import { Col, Container, Row } from "react-bootstrap"
import me from "../assets/me1.jpeg"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
function Intro() {

  const el = useRef()
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I Build <i>Web Solutions/Platforms</i>",
        "I Manage <i>cloud infastructures</i>",
        "I Create <i>mobile applications</i>",
        "I Create <i>desktop applications</i>",
        ""
      ],
      backDelay: 1000,
      typeSpeed: 20,
      loop:true,
      cursorChar:">"
    })
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [])
  return (
    <div>
      <section className="section">
        <Container>
          <Row className="align-items-center justify-content-around">
            <Col lg={7}>
              <h1 className="fw-bold display-4">
                Hello 👋️,<br />
                My name is<br />
                <span>Aje Damilola.</span><br />
                <span ref={el} className="grad"></span>
              </h1>
            </Col>
            <Col lg={4}>
              <div className="round-gradient">
                <img src={me} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Intro