import React from 'react'
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap' 

const App = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="side" xs={3}>
                        <Image className="profile" src={require("./images/profile.jpg")} fluid thumbnail />
                        <div className="center">
                            <h5>Email: masakiasanuma@outlook.com</h5>
                            <h5>Phone: (310) 710-0790</h5>
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