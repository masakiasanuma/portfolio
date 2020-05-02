import React from 'react'
import { Container, Row, Col, Jumbotron, Image, Button } from 'react-bootstrap' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const App = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="side" xs={3}>
                        <Image className="profile" src={require("./images/profile.jpg")} fluid thumbnail />
                        <div className="center">
                            <h5><FontAwesomeIcon icon={faEnvelope} /> - masakiasanuma@outlook.com</h5>
                            <h5><FontAwesomeIcon icon={faPhone} /> - (310) 710-0790</h5>
                            <Button className="button" href="https://www.linkedin.com/in/masakiasanuma/" size="lg"><FontAwesomeIcon icon={faLinkedin} /></Button>
                            <Button className="button" href="https://github.com/Masasasaki" size="lg"><FontAwesomeIcon icon={faGithub} /></Button>
                        </div>
                    </Col>
                    <Col className="main" xs={9}>
                        <Jumbotron>
                            <h1 className="header">Hey!</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App