import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import Side from './components/side'
import AboutMe from './components/aboutme'

const App = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="side" sm={12} md={6} lg={4}>
                        <Side />
                    </Col>
                    <Col className="main" sm={12} md={6} lg={8}>
                        <AboutMe />
                        <div>
                            <h2 className="header">Experience</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App