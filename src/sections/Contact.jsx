import { Button, Container } from "react-bootstrap";
import { MdSend } from "react-icons/md";

export default function Contact() {
  return (
    <section className="section">
      <Container className="text-center">
        <div className="text-center fw-bold display-5 mb-2">Need a Project? Or Want To ask Questions?</div>
        <Button size='lg' onClick={()=>window.location.href="mailto:ajedamilola2005@gmail.com"}><MdSend /> CONTACT ME</Button>
      </Container>
    </section>
  )
}
