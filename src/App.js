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
                    <Col className="side" md={12} lg={4}>
                        <Side />
                    </Col>
                    <Col className="main" md={12} lg={8}>
                        <Container fluid>
                            <Row>
                                <AboutMe />
                            </Row>
                            <Row className="section">
                                <h1 className="header sectionTitle">Experience <span role="img" aria-label="work">👔</span></h1>
                                <hr className="separator" />
                                <Experience />
                            </Row>
                            <Row className="section">
                                <h1 className="header">Projects <span role="img" aria-label="computer">💻</span></h1>
                                <hr className="separator" />
                                <Projects />
                            </Row>
                            <Row className="section">
                                <h1 className="header">Skills <span role="img" aria-label="tools">🧰</span></h1>
                                <hr className="separator" />
                                <Skills />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Activities</h2>
                                <hr className="separator" />
                            </Row>
                            <Row className="section">
                                <h2 className="header">Hobbies</h2>
                                <hr className="separator" />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App