import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 
import Side from './components/side'
import AboutMe from './components/aboutme'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'

const App = () => {
    const containerStyle = {
        backgroundColor: 'black'
    }

    return (
        <div>
            <Container style={containerStyle} fluid>
                <Row>
                    <Col className="side" sm={12} md={6} lg={4}>
                        <Side />
                    </Col>
                    <Col className="main" sm={12} md={6} lg={8}>
                        <Container fluid>
                            <Row>
                                <AboutMe />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Experience</h2>
                                <hr className="separator" />
                                <Experience />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Projects</h2>
                                <hr className="separator" />
                                <Projects />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Skills</h2>
                                <hr className="separator" />
                                <Skills />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Activities</h2>
                                <hr className="separator" />
                                <Skills />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Hobbies</h2>
                                <hr className="separator" />
                                <Skills />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App