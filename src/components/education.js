import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap' 

const Education = () => {
    return (
        <Container>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/gtlogo.png")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>Georgia Institute of Technology <span className="date">Aug 2018 - Dec 2022 (Expected)</span></h3>
                        <h4><span className="light">Bachelor of Science in Computer Science </span><span className="date">Atlanta, GA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <ul>
                        <li>
                            <b>Relevant Coursework:</b> Data Structures, Algorithms, Software Engineering, Software Design, Databases, Computer Networking, Object-Oriented Programming, Computer Architecture
                        </li>
                        <li>
                            <b>Activities:</b> Drummer at <a href="https://marchingband.gatech.edu/drumline" target="_blank" rel="noopener noreferrer">Yellow Jacket Marching Band</a>
                        </li>
                        <li>
                            <b>Threads:</b> <a href="https://www.cc.gatech.edu/content/information-internetworks" target="_blank" rel="noopener noreferrer">Information Internetworks</a> & <a href="https://www.cc.gatech.edu/content/media" target="_blank" rel="noopener noreferrer">Media</a>
                        </li>
                    </ul>
                </Row>
            </div>
            <div className="entry">
                <Row>
                    <Col xs={5} sm={4} md={2}>
                        <Image className="logo" src={require("../images/spartans.jpg")} fluid />
                    </Col>
                    <Col className="adjust" xs={7} sm={8} md={10}>
                        <h3>South Torrance High School <span className="date">Sep 2014 - Jun 2018</span></h3>
                        <h4><span className="light">High School Diploma</span> <span className="date">Torrance, CA</span></h4>
                    </Col>
                </Row>
                <Row className="desc">
                    <ul>
                        <li>
                            <b>Activities:</b> President at <a href="https://torbots.wixsite.com/mysite" target="_blank" rel="noopener noreferrer">FRC Team 1197</a>, Drum Captain at <a href="http://southhighband.org/wp/" target="_blank" rel="noopener noreferrer">Spartans Marching Band</a>
                        </li>
                    </ul>
                </Row>
            </div>
        </Container>
    )
}

export default Education