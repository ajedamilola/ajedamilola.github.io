import { Card, Col, Container, Row, Stack } from "react-bootstrap"
import open from "../icons/open.svg"
import { FaLock } from "react-icons/fa"
function Projects() {
  const projects = [
    {
      name: "Scheeda", description: "A Tool for generating digital Corporate Identity materials such as Business cards, Company Ids e.t.c and provides users the ability to customize them, get statistics and also convert them into qr codes", url: "https://scheeda.com", published: true, public: true, stack: "React, Mongodb, Express, NodeJS, MUI, Vite",
      cover: "https://images.pexels.com/photos/4585184/pexels-photo-4585184.jpeg?auto=compress&cs=tinysrgb&w=720"
    },

    {
      name: "SchoolMate", description: "Schoolmate is a accessible and full School Management and Examination System that aims at making the school processes (Class Management, Examinations, Results e.t.c) Easier. Schoolmate leverage on the power of AI examination management easier and fater", url: "", published: false, public: true, stack: "Electron, React, Mongodb, Express, Chakra UI, NodeJS, Vite, Chat-GPT",
      cover: "https://images.pexels.com/photos/11280357/pexels-photo-11280357.jpeg?auto=compress&cs=tinysrgb&w=720"
    }
  ]
  return (
    <div>
      <section className="section">
        <Container>
          <h1 className="display-5 fw-bold">
            My Projects
          </h1>
          <p className="">What i have done so far</p>
          <Row>
            {projects.map(s => <Col key={s.name} lg={4} md={6} sm={12}>
              <Card className="shadow-sm border-0 h-100 rounded-4 overflow-hidden">
                <div style={{ height: 300, overflow: "hidden", maxWidth:"100%" }}>
                  <Card.Img src={s.cover} variant="top" style={{ width: "auto", minHeight: "100%", minWidth: "100%" }} />
                </div>
                <Card.Body>
                  <Stack className="h-100">
                    <Card.Title className="fw-bold">{s.name}</Card.Title>
                    <Card.Text>{s.description}</Card.Text>
                    <div className="text-sm text-muted"><b>Stack:</b> {s.stack}</div>
                    <div style={{ flex: 1 }}></div>
                    <Stack direction="horizontal" className="align-items-center pt-3">
                      <a href={s.url} className="text-muted text">
                        {
                          s.published ?
                            s.public ? <><img src={open} /> View</>
                              : <><FaLock /> Private</>
                            : <>Not Published Yet</>
                        }
                      </a>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>)}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Projects