import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Container, Row, Col } from 'react-bootstrap' 
import Side from './components/side'
import AboutMe from './components/aboutme'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Hobbies from './components/hobbies'
import Education from './components/education'

const App = () => {
    const containerStyle = {
        backgroundColor: 'black',
        fontFamily: 'Jost'
    }

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            duration: 1000,
            delay: 150,
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <Container style={containerStyle} fluid>
                <Row>
                    <Col className="side" md={12} lg={4}>
                        <Side />
                    </Col>
                    <Col className="main" md={12} lg={8}>
                        <Container fluid>
                            <Row data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                                <AboutMe />
                            </Row>
                            <Row className="section" data-aos="fade-right" data-aos-offset="200" data-aos-anchor-placement="top-center">
                                <h1 className="header sectionTitle">Experience <span role="img" aria-label="work">👔</span></h1>
                                <hr className="separator" />
                                <Experience />
                            </Row>
                            <Row className="section" data-aos="fade-right" data-aos-anchor-placement="top-center">
                                <h1 className="header">Projects <span role="img" aria-label="computer">💻</span></h1>
                                <hr className="separator" />
                                <Projects />
                            </Row>
                            <Row className="section" data-aos="fade-right" data-aos-anchor-placement="top-center">
                                <h1 className="header sectionTitle">Education <span role="img" aria-label="school">🏫</span></h1>
                                <hr className="separator" />
                                <Education />
                            </Row>
                            <Row className="section" data-aos="fade-right" data-aos-offset="0" data-aos-anchor-placement="top-center">
                                <h1 className="header">Skills <span role="img" aria-label="tools">🧰</span></h1>
                                <hr className="separator" />
                                <Skills />
                            </Row>
                            <Row className="section" data-aos="fade-right" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
                                <h1 className="header">Hobbies <span role="img" aria-label="guitar">🎸</span><span role="img" aria-label="coffee">☕</span></h1>
                                <hr className="separator" />
                                <Hobbies />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App